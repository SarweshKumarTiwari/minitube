import { Router } from "express";
import userAuth from "../controllers/auth.controller/user.auth";
import commentsControllers from "../controllers/comments.controllers";

const commentRoutes=Router();

commentRoutes.post("/postcomment",
userAuth.authenticate,
commentsControllers.isCommentAllowed,
commentsControllers.postComment);

commentRoutes.get("/getcomments/:v_id?",
userAuth.authenticate,
commentsControllers.getAllUserComments);

commentRoutes.get("/getusercomments/:u_id?",
userAuth.authenticate,
commentsControllers.getAllUserComments);

commentRoutes.delete("/deletecomment/:c_id?",
userAuth.authenticate,
commentsControllers.deleteComment);

export default commentRoutes;