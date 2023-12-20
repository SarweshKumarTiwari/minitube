import {Request,Response} from "express";
import uploadOnCloudinary from "../services/video.services/cloudUpload.service";
import videosModels from "../models/videos/videos.models";
import asyncHandler from "../utils/asyncHandler";
import { AppError } from "../utils/errorHander";
type modified={
    [fieldname:string]:Express.Multer.File[]
}

class VideoController {
    async upload(req:Request,res:Response){
        const request=req.body
        try {
            if (!req.files) {
                return res.status(400).json({error:"No file provided"})
            }
            if (!(request.v_title&&request.v_categ&&request.channel)) {
                return res.status(400).json({error:"Some data is missing"});
            }
            console.log(req.files);
            const files=req.files as modified;
            const cover_url=await uploadOnCloudinary(files['cover'][0].path);
            const url=await uploadOnCloudinary(files['video'][0].path);
            if (!url||!cover_url) {
                return res.status(400).json({error:"something happened while uploading"})
            }
            req.body.v_url=url?.url;
            req.body.v_cover=cover_url?.url
            const result=await videosModels.insertVideo(req.body);
            if (!result) {
                return res.status(400).json({error:"something happened not inserted"})
            }
            return res.status(201).json({success:result})
        } catch (error) {
           console.log(error);
           return res.status(500).json({error:"Sorry,some error occured"});
            
        }

    }

    public getVideo = asyncHandler(async function(req:Request,res:Response){
            if (!req.params.v_id) {
                throw new AppError("video Id is not given",400);
            }
            const result=await videosModels.getOneVideo(req.params.v_id);
            return res.status(200).json({success:result});
    })

    public searchVideos = asyncHandler(async function(req:Request,res:Response){
        const title=req.params.title;
        const data=await videosModels.getVideoByTitle(title);
        return res.status(200).json({success:data.data})
    })

    async updateComments(req:Request,res:Response){
        try {
            await videosModels.updateVideo(req.body.v_id,{allow_comments:req.body.comments})
            return res.status(200).json({success:`Updated comment status to ${req.body.comments}`})
        } catch (error) {
            console.log(error);
            return res.status(500).json({error:error})
        }
    }

}

export default new VideoController();