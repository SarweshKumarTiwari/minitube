import mongoose, { Schema } from "mongoose";

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
    refresh_tokens: [
        {
            type: String,
            required: false,
            max:[4,"can not access from multiple places"]
        }
    ]
}, {
    timestamps: true
})

export default mongoose.model("users", users);