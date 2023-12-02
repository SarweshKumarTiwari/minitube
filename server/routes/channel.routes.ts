import { Router } from "express";
import channelControllers from "../controllers/channel.controllers";
import userAuth from "../controllers/auth.controller/user.auth";

const channelRoutes=Router();

channelRoutes.post("/addchannel",
userAuth.authenticate,
channelControllers.newChannel
);

export default channelRoutes;