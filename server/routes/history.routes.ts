import { Router } from "express";
import historyControllers from "../controllers/history.controllers";
import userAuth from "../controllers/auth.controller/user.auth";

const historyRoutes=Router();

historyRoutes.post("/addhistory",
userAuth.authenticate,
historyControllers.addHistory)

historyRoutes.get("/gethistory",
userAuth.authenticate,
historyControllers.showAllHistory)

historyRoutes.delete("/deleteahistory/:h_id?",
userAuth.authenticate,
historyControllers.deleteAHistory)

historyRoutes.delete("/clearhistory?",
userAuth.authenticate,
historyControllers.clearAllHistory)

export default historyRoutes;