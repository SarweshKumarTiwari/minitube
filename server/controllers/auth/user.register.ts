import { Request, Response, NextFunction } from "express";
import verifyData from "../../services/user.auth/users.params.verify";
import usersModels from "../../models/userModels/users.models";
import password from "../../utils/password";
import dotenv from "dotenv";
import { getTokens } from "../../services/user.auth/users.credentials.check";
dotenv.config();

class RegisterUser {
    async verifyUserAttributes(req: Request, res: Response, next: NextFunction) {
        const errors = verifyData(req.body);
        if (errors.length > 0) {
            return res.status(400).json({ error: errors })
        }
        next();
    }

    async isUserExists(req: Request, res: Response, next: NextFunction) {
        try {
            if (await usersModels.getUserByFields({email:req.body.email},{_id:1}) !== null) {
                return res.status(400).json({ error: "user already exists" });
            }
            next();
        } catch (error) {
            console.log(error);
            return res.status(400).json({ error: error });
        }
    }

    async registerUser(req: Request, res: Response) {
        try {
            req.body.password = await password.encrypt(req.body.password);
            const data = await usersModels.createUser(req.body);
            if (!data) {
                return res.sendStatus(400);
            }
            const {access_token,refresh_token}=getTokens(data._id as string);
            res.cookie("at",access_token,{
                httpOnly:true,
                secure:true,
                sameSite:true
            })
            res.cookie("at",refresh_token,{
                httpOnly:true,
                secure:true,
                sameSite:true
            })
            return res.status(201).json({success:"successfully registered"});
        } catch (error) {
            console.log(error);
            return res.status(500).json({ error: error });
        }
    }

}

export default new RegisterUser();