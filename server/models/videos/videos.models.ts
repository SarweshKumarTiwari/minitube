import { videoMutate, videoTypes } from "../../types/video.types";
import videosEntity from "./videos.entity";
import commentsEntity from "../comments/comments.entity"

class VideoModules{
    async insertVideo(data:videoTypes){
        try {
            return await new videosEntity(data).save();
        } catch (error) {
            throw new Error(error)
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
}

export default new VideoModules();