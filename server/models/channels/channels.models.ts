import { channelType } from "../../types/channel.types";
import channelsEntity from "./channels.entity";
import videoEntitiy from "../videos/videos.entity"

class ChannelModels{
    async addChannel(data:channelType){
        try {
            const result= new channelsEntity(data);
            await result.save();
        } catch (error) {
            throw new Error(error)
        }
    }

    async getChannelInfo(channel_id:string){
        try {
            const result=await channelsEntity.findById(channel_id);
            if (!result) {
                throw new Error("Channel not found");
            }
            return result;
        } catch (error) {
            throw new Error(error)
        }
    }
    

    async deleteChannel(channel_id:string){
        try {
            const isAllVideosDeleted=await videoEntitiy.deleteMany({c_id:channel_id});
            if (!isAllVideosDeleted.acknowledged){
                throw new Error("not deleted videos");
                
            }
            return await channelsEntity.findByIdAndDelete(channel_id);
        } catch (error) {
            throw new Error(error)
        }
    }
}

export default new ChannelModels();