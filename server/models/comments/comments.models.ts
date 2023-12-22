import commentEntity from "../comments/comments.entity";
import {commentType} from "../../types/comment.types"
import { AppError } from "../../utils/errorHander";
import { Types } from "mongoose";

class CommentModels{
    async insertComment(comment:commentType){
          return await new commentEntity(comment).save();
    }

    async getAllCommentsOfAVideo(video_id:string){
        if (!Types.ObjectId.isValid(video_id)) {
            throw new AppError("Bad request id is not valid",400);
        }
        const result=await commentEntity
        .find({v_id:video_id})
        .select("-v_id -u_id");
        if (!result.length) {
            throw new AppError("No comments Found",400);
        }
        return result;
    }

    async deleteComment(commentId:string){
        if (!Types.ObjectId.isValid(commentId)) {
            throw new AppError("Bad request id is not valid",400);
        }
        const result=await commentEntity.findByIdAndDelete(commentId);
        return result;
    }
    async getAllComments(u_id:string){
        if (!Types.ObjectId.isValid(u_id)) {
            throw new AppError("Bad request id is not valid",400);
        }
        const result=await commentEntity.find({u_id:u_id});
        return result;
    }

}
export default new CommentModels();