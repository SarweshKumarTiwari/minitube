import userModels from "./users.entity";
import { user } from "../../types/user.types";

class UserModels{
    async createUser(user:user){
        const data= new userModels(user);
        return await data.save();
    }

    async getUserByFields(data:{email?:string,_id?:string},fields:{_id?:0|1,password?:0|1,refresh_token?:0|1}){
        return await userModels.findOne(data,fields);
    }

    async updateUser(userId:string,data:{password?:string,refresh_token?:string}){
        return await userModels.findByIdAndUpdate(userId,data);
    }
}

export default new UserModels();