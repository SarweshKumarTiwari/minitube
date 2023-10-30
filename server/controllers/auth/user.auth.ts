import { Request, Response, NextFunction, CookieOptions } from "express"
import usersModels from "../../models/userModels/users.models";
import checkCredentials from "../../services/user.auth/users.credentials.check";
class Auth {
    async verifyAndAuthoriseUser(req: Request, res: Response, next: NextFunction) {
        if (!(req.body.email && req.body.password)) {
            return res.status(400).json({ error: "some fields are empty" })
        }
        const data = await usersModels.getUserByEmail(req.body.email);
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
        }
        let cookieOptions:CookieOptions={
            httpOnly:true,
            sameSite:true,
            secure:true
        }
        res.cookie("at",result.access_token,cookieOptions)
        res.cookie("rt",result.refresh_token,cookieOptions)
        return res.status(200).json({success:"successfull"})
    }
}

export default new Auth();