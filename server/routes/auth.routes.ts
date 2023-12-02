import {Router } from "express"
import userRegister from "../controllers/auth.controller/user.register";
import userAuth from "../controllers/auth.controller/user.auth";

const routes=Router();

routes.post("/register",
userRegister.verifyUserAttributes,
userRegister.isUserExists,
userRegister.registerUser);

routes.post("/token",userAuth.authorization);
routes.get("/authenticate",userAuth.authenticate,userAuth.check);
routes.get("/access_token",userAuth.getAccessToken);

export default routes;