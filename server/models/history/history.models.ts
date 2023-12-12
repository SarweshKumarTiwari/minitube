import { historyType } from "../../types/history.types";
import { AppError } from "../../utils/errorHander";
import historyEntity from "./history.entity"

class HistoryModel{
    async insertHistory(history:historyType){
            return await new historyEntity(history).save();
    }

    async getAllHistoryOfUser(userId:string){
        const result=await historyEntity.find({u_id:userId});
        return result;
    }

    async delete_A_History(h_id:string){
        const result=await historyEntity.findByIdAndDelete(h_id);
        if (!result) {
            throw new AppError("please check id",400);
        }
        return result;
    }

    async clearHistory(u_id:string){
        const result=await historyEntity.deleteMany({u_id:u_id});
        if (!result) {
            throw new AppError("please check user id",404);
        }
        return result;
    }
}

export default new HistoryModel();