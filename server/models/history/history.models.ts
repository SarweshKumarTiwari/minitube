import { historyType } from "../../types/history.types";
import historyEntity from "./history.entity"
import videoEntity from "../videos/videos.entity"

class HistoryModel{
    async insertHistory(history:historyType){
        try {
            return await new historyEntity(history).save();
        } catch (error) {
            throw new Error(error)
        }
    }

    async getAllHistoryOfUser(userId:string){
        const result=await historyEntity.find({u_id:userId},{v_id:1,_id:1});
        if (!result) {
            throw new Error("There is no history");
        }
        const final=await videoEntity.find({_id:{$all:result.map(e=>e.v_id)}});
        return final
    }

    async name(params:any){
        
    }
}

export default new HistoryModel();