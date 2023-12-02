import {Request,Response} from "express";
import uploadOnCloudinary from "../services/video.services/cloudUpload.service";
import videosModels from "../models/videos/videos.models";

class VideoController {
    async upload(req:Request,res:Response){
        const request=req.body
        try {
            if (!req.file) {
                return res.status(400).json({error:"No file provided"})
            }
            if (!(request.v_title&&request.v_categ&&request.channel)) {
                return res.status(400).json({error:"Some data is missing"});
            }
            console.log(req.body);
            const url=await uploadOnCloudinary(req.file.path);
            if (!url) {
                return res.status(400).json({error:"something happened while uploading"})
            }
            req.body.v_url=url?.url;
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

    async getVideo(req:Request,res:Response){
        try {
            if (!req.body.v_id) {
                return res.status(400).json({error:"video id is not given"})
            }
            const result=await videosModels.getOneVideo(req.body.v_id);
            return res.status(200).json({success:result});
        } catch (error) {
            return res.status(400).json({error:error});
        }
    }

}

export default new VideoController();