import { Request,Response } from "express";
import historyModels from "../models/history/history.models";
import asyncHandler from "../utils/asyncHandler";
import { AppError } from "../utils/errorHander";
import { CustomRequest } from "../types/customAPITypes";

class HistoryControllers{
    
    public addHistory = asyncHandler(async function (req:Request,res:Response) {
        const request=req.body;
        if (!(request.title&&request.v_id&&request.u_id&&request.duration)) {
            throw new AppError("title or url or id is not given",400);
        };
        await historyModels.insertHistory(request);
        res.status(201).json({success:"New history created"});
    })

    public showAllHistory = asyncHandler(async function (req:CustomRequest,res:Response){
        const result= await historyModels.getAllHistoryOfUser(req.user.uid);
        return res.status(200).json({success:result});
    })

    public deleteAHistory = asyncHandler(async function (req:Request,res:Response){
        if (!req.params.h_id) {
            throw new AppError("no history id found",400);
        }
        await historyModels.delete_A_History(req.params.h_id);
        res.status(200).json({success:"succesfully deleted"});
    });

    public clearAllHistory = asyncHandler(async function (req:CustomRequest,res:Response){
        await historyModels.clearHistory(req.user.uid);
        res.status(200).json({success:"history cleared"});
    })
}
export default new HistoryControllers();