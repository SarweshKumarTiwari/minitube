import dotenv from "dotenv"
import password from "../../utils/password"
import tokenHandler from "../../utils/tokenHandler";
dotenv.config();

type creds = {
    _id?:string,
    password: string
}
export function getTokens(id?:string){
    const access_token = tokenHandler.generateToken({
        iat:Math.floor(Date.now()/1000),
        exp:Math.floor(Date.now() / 1000)+60,
        uid:id
    },
    process.env.ACCESS_TOKEN as string
    )
    const refresh_token=tokenHandler.generateToken({
        iat:Math.floor(Date.now()/1000),
        exp:Math.floor(Date.now() / 1000)+(60*60),
        uid:id
    },
    process.env.REFRESH_TOKEN as string
    )
    return {access_token,refresh_token}
}
export default async function checkCredentials(given_password: string, credentials: creds) {
    try {
        if (!await password.decrypt(given_password, credentials.password)) {
            return { error: "email or password is not valid" }
        }
        const {access_token,refresh_token}=getTokens(credentials._id)
        return {refresh_token:refresh_token,access_token:access_token};
    } catch (error) {
        return {error:error as string};
    }
}