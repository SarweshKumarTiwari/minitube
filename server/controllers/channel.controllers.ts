import { Request,Response } from "express";
import channelsModels from "../models/channels/channels.models";

class ChannelController{
    async newChannel(req:Request,res:Response){
        try {
            const request=req.body;
            if (!(request.c_name&&request.u_id)) {
                return res.status(400).json({error:"Some fields are empty"})
            }
            const result=await channelsModels.addChannel(request);
            return res.status(200).json({success:result})
        } catch (error) {
            console.log(error);
            return res.status(500).json({error:error});
        }

    }
}
export default new ChannelController();
