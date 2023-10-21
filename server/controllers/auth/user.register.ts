import { Request, Response, NextFunction } from "express";
import verifyData from "../../services/user.auth/users.params.verify";
import usersModels from "../../models/userModels/users.models";
import password from "../../utils/password";
import token from "../../utils/tokenHandler";
import sendEmails from "../../services/sendEmails";

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
            if (await usersModels.getUserByEmail(req.body.email) !== null) {
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
            const email = await sendEmails(
                {
                    to: req.body.email,
                    subject: "Welcome to our Team",
                    text: "Hey " + req.body.name + " you are successfully registered",
                }
            )
            if (!email) {
                return res.status(400).json({error:"some error occured while sending email"});
            }
            return res.status(201).cookie("Access_Token", token.generateToken(
                {
                    name: data.name,
                    email: data.email,
                    id: data._id
                }
            ), {
                httpOnly: true,
                sameSite: true,
                path: "/"
            }).json({ success: "Successfully created" })
        } catch (error) {
            console.log(error);
            return res.status(500).json({ error: error });
        }
    }

}

export default new RegisterUser();