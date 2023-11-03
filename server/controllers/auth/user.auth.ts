import { Request, Response, NextFunction, CookieOptions } from "express"
import usersModels from "../../models/userModels/users.models";
import checkCredentials, { getTokens } from "../../services/user.auth/users.credentials.check";
import tokenHandler from "../../utils/tokenHandler";
import dotenv from "dotenv";
import { JsonWebTokenError, TokenExpiredError } from "jsonwebtoken";
dotenv.config();

class Auth {
    async authorization(req: Request, res: Response) {
        let cookieOptions={
            httpOnly:true
        }
        try {
            if (!(req.body.email && req.body.password)) {
                return res.status(400).json({ error: "some fields are empty" })
            }
            const data = await usersModels.getUserByFields({email:req.body.email},{password:1,_id:1});
            if (!data) {
                return res.status(400).json({ error: "no users found" })
            }
            const result = await checkCredentials(req.body.password,
                {
                    _id: data._id as string,
                    password: data.password
                }
            );
            if (result.error) {
                return res.status(400).json({ error:result.error})
            };
            await usersModels.updateUser(data._id as string,{refresh_token:result.refresh_token});
            res.cookie("at",result.access_token,cookieOptions)
            res.cookie("rt",result.refresh_token,cookieOptions)
            return res.status(200).json({success:"successfull"})
        } catch (error) {
            return res.status(500).json({error:error})
        }
    }
    async authenticate(req:Request,res:Response,next:NextFunction){
        try {
            const token=tokenHandler.verifyToken(req.cookies.at,process.env.ACCESS_TOKEN as string);
            req.body.uid=token;
            next();
        } catch (error) {
            if (error instanceof TokenExpiredError) {
                return res.status(400).json({token_expired:"Token is expired"});
            }
            if(error instanceof JsonWebTokenError){
                return res.status(400).json({error:"bad request"})
            }
            return res.status(400).json({error:"bad request"})
        }
    }  

    async getAccessToken(req:Request,res:Response){
        let cookieOptions={
            httpOnly:true,
        }
        try {
            const data=<any>tokenHandler.verifyToken(req.cookies.rt,process.env.REFRESH_TOKEN as string);
            const userLogged=await usersModels.getUserByFields({_id:data.uid},{refresh_token:1})
            if (!userLogged) {
                return res.status(400).json({error:"user not verified"})
            }
            if (userLogged.refresh_token!==req.cookies.rt) {
                return res.status(400).json({error:"user not authentic"})
            }
            const {access_token,refresh_token}=getTokens(data.uid);
            await usersModels.updateUser(data.uid as string,{refresh_token:refresh_token});
            res.cookie("at",access_token,cookieOptions);
            res.cookie("rt",refresh_token,cookieOptions);
            return res.status(200).json({success:"ok"});

        } catch (error) {
            if (error instanceof TokenExpiredError) {
                return res.status(400).json({token_expired:"Token is expired"});
            }
            if(error instanceof JsonWebTokenError){
                console.log(error);
                return res.status(400).json({error:"bad request"})
            }
            return res.status(400).json({error:"bad request"})
        }
    }
    check(req:Request,res:Response){
        return res.status(200).json({success:req.body.uid});
    }
}

export default new Auth();