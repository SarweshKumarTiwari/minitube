import mongoose,{ Schema } from "mongoose";

const videos=new Schema({
    v_title:{
        type:String,
        required:true
    },
    v_type:{
        type:String,
        required:true
    },
    v_desc:{
        type:String,
        required:false
    },
    v_url:{
        type:String,
        required:true
    },
    v_duration:{
        type:String,
        required:true,
    },
    c_id:{
        type:Schema.Types.ObjectId,
        ref:"channels"
    }
},{timestamps:true})

export default mongoose.model("videos",videos);