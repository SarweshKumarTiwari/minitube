import { Request,Response } from "express";
import channelsModels from "../models/channels/channels.models";
import asyncHandler from "../utils/asyncHandler";
import { AppError } from "../utils/errorHander";

class ChannelController{
    public newChannel = asyncHandler(async function (req:Request,res:Response){
        const request=req.body;
        if (!(request.c_name&&request.u_id)) {
            throw new AppError("Some fields are empty",400);
        }
        const result=await channelsModels.addChannel(request);
        return res.status(200).json({success:result})
    })
}
export default new ChannelController();
