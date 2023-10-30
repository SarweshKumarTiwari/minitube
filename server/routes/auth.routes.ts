import {Router } from "express"
import userRegister from "../controllers/auth/user.register";
import userAuth from "../controllers/auth/user.auth";

const routes=Router();

routes.post("/minitube/auth/register",
userRegister.verifyUserAttributes,
userRegister.isUserExists,
userRegister.registerUser);

routes.post("/minitube/auth/token",userAuth.verifyAndAuthoriseUser);

export default routes;