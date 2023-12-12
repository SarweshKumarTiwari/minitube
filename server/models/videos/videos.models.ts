import { videoMutate, videoTypes } from "../../types/video.types";
import videosEntity from "./videos.entity";
import commentsEntity from "../comments/comments.entity"
import { AppError } from "../../utils/errorHander";
import {  Types } from "mongoose";

class VideoModules{
    async insertVideo(data:videoTypes){
        try {
            return await new videosEntity(data).save();
        } catch (error) {
            throw new Error(error as string)
        }
    }

    async getOneVideo(vid_id:string){
        if (!Types.ObjectId.isValid(vid_id)) { //*
            throw new AppError("Bad request id is not valid",400);
        }
        const result=await videosEntity.findById(vid_id);
        if (!result) {
            throw new AppError("No user Found",400);
        }
        return result;
    }

    async getAllVideosOfAChannel(c_id:string){
        const result=await videosEntity.find({c_id:c_id});
        if (!result.length) {
            throw new AppError("No channel videos found",400)
        }
        return result;
    }

    async updateVideo(vid_id:string,toUpdateData:videoMutate){
        const result =await videosEntity.findByIdAndUpdate(vid_id,toUpdateData);
        if (!result) {
            throw new Error("No  videos found")
        }
        return result;
    }

    async deleteVideo(vid_id:string){
        await commentsEntity.deleteMany({v_id:vid_id});
        return await videosEntity.findByIdAndDelete(vid_id);
    }

    async getVideoByTitle(title:string,limit:number=9){
        const data=await videosEntity.find({v_title:title},{v_title:1,v_url:1},{limit:limit});
        if (data.length===0) {
            return {data:"no data founded"}
        }
        return {data:data};
    }
}

export default new VideoModules();