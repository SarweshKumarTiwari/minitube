import mongoose,{ Schema } from "mongoose";

const history=new Schema({
    duration:{
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

export default mongoose.model("history",history);