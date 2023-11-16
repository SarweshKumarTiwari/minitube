import mongoose from "mongoose";
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