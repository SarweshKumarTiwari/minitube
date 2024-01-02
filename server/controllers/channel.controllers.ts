import { Request,Response } from "express";
import channelsModels from "../models/channels/channels.models";
import asyncHandler from "../utils/asyncHandler";
import { AppError } from "../utils/errorHander";
import { CustomRequest } from "../types/customAPITypes";

class ChannelController{
    public newChannel = asyncHandler(async function (req:CustomRequest,res:Response){
        const request=req.body;
        if (!(request.c_name)) {
            throw new AppError("Some fields are empty",400);
        }
        request.u_id=req.user.uid;
        const result=await channelsModels.addChannel(request);
        return res.status(200).json({success:result})
    })
}
export default new ChannelController();
