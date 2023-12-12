import mongoose,{ Schema } from "mongoose";

const history=new Schema({
    title:{
        type:String,
        required:true
    },
    url:{
        type:String,
        required:true
    },
    u_id:{
        type:Schema.Types.ObjectId,
        ref:"users",
    }
},{timestamps:true})

export default mongoose.model("history",history);