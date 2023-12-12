import { Router } from "express";
import userAuth from "../controllers/auth.controller/user.auth";
import {uploadFile} from "../services/video.services/upload.services"
import videoControllers from "../controllers/video.controllers";

const videoRoutes=Router();

videoRoutes.post("/upload",
userAuth.authenticate,
uploadFile.single("upload"),
videoControllers.upload);

videoRoutes.get("/getvideo/:v_id?",
userAuth.authenticate,
videoControllers.getVideo)

videoRoutes.get("/search/:title?",
videoControllers.searchVideos);

videoRoutes.put("/comment_status",
userAuth.authenticate,
videoControllers.updateComments
)

export default videoRoutes;