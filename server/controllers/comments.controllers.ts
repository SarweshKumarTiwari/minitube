 import { NextFunction, Request,Response } from "express";
import asyncHandler from "../utils/asyncHandler";
import { AppError } from "../utils/errorHander";
import commentsModels from "../models/comments/comments.models";
import videosModels from "../models/videos/videos.models";
import { CustomRequest } from "../types/customAPITypes";
 class CommentControllers{
    public isCommentAllowed =asyncHandler(async function (req:CustomRequest,res:Response,next:NextFunction){
        const request=req.body
        if (!(request.u_name&&request.comment&&request.v_id)) {
            throw new AppError("You have missed some fields",400)
        }
        request.u_id=req.user.uid;
        const {allow_comments}=await videosModels.getOneVideo(request.v_id);
        if (!allow_comments) {
            throw new AppError("No one is allowed to post comment",400)
        }
        next();
    })

    public postComment =asyncHandler(async function (req:Request,res:Response){
        const result=await commentsModels.insertComment(req.body);
        res.status(201).json({success:result.comment});
    })

    public allComments =asyncHandler(async function (req:Request,res:Response){
        if (!req.params.v_id) {
            throw new AppError("no video id provided",400)
        }
        const result=await commentsModels.getAllCommentsOfAVideo(req.params.v_id);
        res.status(200).json({success:result});
    })

    public getAllUserComments =asyncHandler(async function (req:CustomRequest,res:Response){
        if (!req.params.u_id) {
            throw new AppError("no user id found",400)
        }
        const result=await commentsModels.getAllComments(req.user.uid);
        res.status(200).json({success:result})
    })

    public deleteComment =asyncHandler(async function (req:Request,res:Response){
        if (!req.params.c_id) {
            throw new AppError("no user id provid",400)
        }
        await commentsModels.deleteComment(req.params.c_id);
        res.status(200).json({success:"deleted comment"})
    })
 }

 export default new CommentControllers()