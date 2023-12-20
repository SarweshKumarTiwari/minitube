import { Request, Response, NextFunction, CookieOptions } from "express"
import usersModels from "../../models/userModels/users.models";
import checkCredentials, { getTokens } from "../../services/user.auth/users.credentials.check";
import tokenHandler from "../../utils/tokenHandler";
import { JsonWebTokenError, TokenExpiredError } from "jsonwebtoken";
import asyncHandler from "../../utils/asyncHandler";
import { AppError } from "../../utils/errorHander";
import { CustomRequest } from "../../types/customAPITypes";

class Auth {
    public authorization = asyncHandler(async function (req: Request, res: Response) {
        let cookieOptions = {
            httpOnly: true
        }
        if (!(req.body.email && req.body.password)) {
            throw new AppError("Some fields are empty",400)
        }
        const data = await usersModels.getUserByFields({ email: req.body.email }, { password: 1, _id: 1, name: 1 });
        if (!data) {
            throw new AppError("No user found",400)
        }
        const result = await checkCredentials(req.body.password,
            {
                _id: data._id as string,
                password: data.password,
                name: data.name
            }
        );
        if (result.error) {
            throw new AppError(result.error,400);
        };
        await usersModels.updateUser(data._id as string, { refresh_token: result.refresh_token });
        res.cookie("at", result.access_token, cookieOptions)
        res.cookie("rt", result.refresh_token, cookieOptions)
        res.status(200).json({ success: "successfull" })
    })
    async authenticate(req: CustomRequest, res: Response, next: NextFunction) {
        try {
            const token = tokenHandler.verifyToken(req.cookies.at, process.env.ACCESS_TOKEN as string);
            req.user = token;
            next();
        } catch (error) {
            if (error instanceof TokenExpiredError) {
                return res.status(400).json({ token_expired: "Token is expired" });
            }
            if (error instanceof JsonWebTokenError) {
                return res.status(400).json({ error: "bad request" })
            }
            return res.status(400).json({ error: "bad request" })
        }
    }

    async getAccessToken(req: Request, res: Response) {
        let cookieOptions = {
            httpOnly: true,
        }
        try {
            const data = <any>tokenHandler.verifyToken(req.cookies.rt, process.env.REFRESH_TOKEN as string);
            const userLogged = await usersModels.getUserByFields({ _id: data.uid }, { refresh_token: 1 })
            if (!userLogged) {
                return res.status(400).json({ error: "user not verified" })
            }
            if (userLogged.refresh_token !== req.cookies.rt) {
                return res.status(400).json({ error: "user not authentic" })
            }
            const { access_token, refresh_token } = getTokens(data.uid);
            await usersModels.updateUser(data.uid as string, { refresh_token: refresh_token });
            res.cookie("at", access_token, cookieOptions);
            res.cookie("rt", refresh_token, cookieOptions);
            return res.status(200).json({ success: "ok" });

        } catch (error) {
            if (error instanceof TokenExpiredError) {
                return res.status(400).json({ token_expired: "Token is expired" });
            }
            if (error instanceof JsonWebTokenError) {
                return res.status(400).json({ error: "bad request" })
            }
            return res.status(400).json({ error: "bad request" })
        }
    }
    check(req: CustomRequest, res: Response) {
        return res.status(200).json({ success: req.user });
    }

    public logout = asyncHandler(async function (req: CustomRequest, res: Response) {
        if (!req.user.uid) {
            throw new AppError("Something went wrong around auth", 400);
        }
        await usersModels.updateUser(req.user.uid, { refresh_token: "" });
        res.clearCookie("at")
        .clearCookie("rt")
        .status(200).json({ success: "user logged out successfully" });
    })
}

export default new Auth();