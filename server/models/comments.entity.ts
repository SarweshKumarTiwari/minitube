import mongoose,{ Schema } from "mongoose";

const comments=new Schema({
    u_name:{
        type:String,
        required:true
    },
    comment:{
        type:String,
        required:true
    },
    u_id:{
        type:Schema.Types.ObjectId,
        ref:"users",
    },
    v_id:{
        type:Schema.Types.ObjectId,
        ref:"videos"
    }
},{timestamps:true})

export default mongoose.model("comments",comments);