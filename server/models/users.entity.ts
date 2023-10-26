import mongoose,{Schema} from "mongoose";

const users:Schema=new Schema({
    name:{
        required:true,
        type:String
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
},{
    timestamps:true
})

export default  mongoose.model("users",users);