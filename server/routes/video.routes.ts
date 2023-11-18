import { Router } from "express";
import userAuth from "../controllers/auth.controller/user.auth";
import {uploadFile} from "../services/video.services/upload.services"
import videoControllers from "../controllers/video.controllers";

const videoRoutes=Router();

videoRoutes.post("/video/upload",
userAuth.authenticate,
uploadFile.array("upload"),
videoControllers.upload)