import commentEntity from "../comments/comments.entity";
import {commentType} from "../../types/comment.types"

class CommentModels{
    async insertComment(comment:commentType){
        try {
            return await new commentEntity(comment).save();
        } catch (error) {
            throw new Error(error)
        }
    }

    async getAllCommentsOfAVideo(video_id:string){
        try {
            const result=await commentEntity.find({v_id:video_id});
            if (!result) {
                throw new Error("No comments Found");
            }
            
        } catch (error) {
            throw new Error(error)
        }
    }

    async deleteComment(commentId:string){
        try {
            await commentEntity.findByIdAndDelete(commentId);
        } catch (error) {
            throw new Error(error)
        }
    }

}
export default new CommentModels();