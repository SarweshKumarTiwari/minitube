import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const uri=process.env.DB_CONNECTION_URL||"";
export default async()=>{
    try {
        const connectionStatus=await mongoose.connect(uri,{dbName:"Minitube"});
        console.log("Database is connected at ",connectionStatus.connection.host);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}