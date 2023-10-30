import mongoose from "mongoose"
import password from "../../utils/password"
import tokenHandler from "../../utils/tokenHandler"

type creds = {
    _id?:string,
    password: string
}
export default async function checkCredentials(given_password: string, credentials: creds) {
    try {
        if (!password.decrypt(given_password, credentials.password)) {
            return { error: "email or password is not valid" }
        }
        const access_token = tokenHandler.generateToken({
            iat:Date.now(),
            exp:Date.now()/(1000*60*60),
            uid:credentials._id
        })
        const refresh_token=tokenHandler.generateToken({
            iat:Date.now(),
            exp:Date.now()/(1000*60*60),
            uid:credentials._id
        })
        return {refresh_token:refresh_token,access_token:access_token};
    } catch (error) {
        console.log(error);
        return {error:error as string};
    }
}