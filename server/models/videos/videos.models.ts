import { videoMutate, videoTypes } from "../../types/video.types";
import videosEntity from "./videos.entity";
import commentsEntity from "../comments/comments.entity"

class VideoModules{
    async insertVideo(data:videoTypes){
        try {
            return await new videosEntity(data).save();
        } catch (error) {
            throw new Error(error as string)
        }
    }

    async getOneVideo(vid_id:string){
        const result=await videosEntity.findById(vid_id);
        if (!result) {
            throw new Error("No user Found")
        }
    }

    async getAllVideosOfAChannel(c_id:string){
        const result=await videosEntity.find({c_id:c_id});
        if (!result) {
            throw new Error("No channel videos found")
        }
    }

    async updateVideo(vid_id:string,toUpdateData:videoMutate){
        const result =await videosEntity.findByIdAndUpdate(vid_id,toUpdateData);
        if (!result) {
            throw new Error("No  videos found")
        }
    }

    async deleteVideo(vid_id:string){
        await commentsEntity.deleteMany({v_id:vid_id});
        return await videosEntity.findByIdAndDelete(vid_id);
    }

    async getVideoByTitle(title:string){
        const data=await videosEntity.find({v_title:title},{v_title:1,v_url:1});
        if (data.length===0) {
            return {data:"no data found"}
        }
        return {data:data};
    }
}

export default new VideoModules();