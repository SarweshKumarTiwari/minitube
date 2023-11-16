import mongoose, { Schema } from "mongoose";
import password from "../../utils/password";

const users: Schema = new Schema({
    name: {
        required: true,
        type: String
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    refresh_token: {
        type:String,
        required:false
    }
}, {
    timestamps: true
})

users.pre("save",async function (next){
    try {
        if (!this.isModified(this.password)) {
            return next();
        }
        this.password=await password.encrypt(this.password);
        next();
    } catch (error) {
        console.log(error)
    }
})

export default mongoose.model("users", users);