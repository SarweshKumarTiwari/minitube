import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const uri=process.env.DB_CONNECTION_URL||"";
export default ()=>{
    try {
        mongoose.connect(uri,{dbName:"Minitube"});
        console.log("database connected successfully");
    } catch (error) {
        console.log(error);
    }
}