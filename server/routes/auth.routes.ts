import {Router } from "express"
import userRegister from "../controllers/auth/user.register";

const routes=Router();

routes.post("/register",
userRegister.verifyUserAttributes,
userRegister.isUserExists,
userRegister.registerUser);

export default routes;