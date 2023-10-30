import userModels from "../users.entity";
import { user } from "../../types/user.types";

class UserModels{
    async createUser(user:user){
        const data= new userModels(user);
        return await data.save();
    }

    async getUserByEmail(emailId:string){
        return await userModels.findOne({email:emailId},{_id:1,password:1});
    }
}

export default new UserModels();