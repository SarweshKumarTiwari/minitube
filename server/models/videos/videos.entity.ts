import mongoose,{ Schema } from "mongoose";

const videos=new Schema({
    v_title:{
        type:String,
        required:true
    },
    v_categ:{
        type:String,
        required:true
    },
    v_desc:{
        type:String,
        required:false
    },
    v_cover:{
        type:String,
        required:true
    },
    v_url:{
        type:String,
        required:true
    },
    channel:{
        type:Schema.Types.ObjectId,
        ref:"channels"
    },
    allow_comments:{
        type:Boolean,
        default:true
    },
    
},{timestamps:true})

export default mongoose.model("videos",videos);