import mongoose,{ Schema } from "mongoose";

const channels=new Schema({
    c_name:{
        type:String,
        required:true
    },
    c_videos:{
        type:Number,
        required:false,
        default:0
    },
    u_id:{
        type:Schema.Types.ObjectId,
        ref:"users"
    }
},{timestamps:true});

export default mongoose.model("channels",channels);