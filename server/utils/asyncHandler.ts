import { NextFunction, Request, Response } from "express";
import { AppError } from "./errorHander";

export default function asyncHandler(dependent:(req:Request,res:Response,next:NextFunction)=>Promise<any>){
    return async function (req:Request,res:Response,next:NextFunction) {
        try {
            await dependent(req,res,next);
        } catch (error) {
            if (error instanceof AppError) {
                return res.status(error.status).json({error:error.message})
            }
            return res.status(500).json({error:error})
        }
    }
}