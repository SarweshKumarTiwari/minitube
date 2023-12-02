import { channelType } from "../../types/channel.types";
import channelsEntity from "./channels.entity";
import videoEntitiy from "../videos/videos.entity"

class ChannelModels{
    async addChannel(data:channelType){
            const result= new channelsEntity(data);
            return await result.save();
    }

    async getChannelInfo(channel_id:string){
            const result=await channelsEntity.findById(channel_id);
            if (!result) {
                throw new Error("Channel not found");
            }
            return result;        
    }  

    async deleteChannel(channel_id:string){
            const isAllVideosDeleted=await videoEntitiy.deleteMany({c_id:channel_id});
            if (!isAllVideosDeleted.acknowledged){
                throw new Error("not deleted videos"); 
            }
            return await channelsEntity.findByIdAndDelete(channel_id);
    }
}

export default new ChannelModels();