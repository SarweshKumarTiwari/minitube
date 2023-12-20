import password from "../../utils/password"
import tokenHandler from "../../utils/tokenHandler";

type creds = {
    _id?:string,
    password: string,
    name?:string
}
export function getTokens(id?:string,name?:string){
    const access_token = tokenHandler.generateToken({
        iat:Math.floor(Date.now()/1000),
        exp:Math.floor(Date.now() / 1000)+60*60,
        uid:id,
        name:name
    },
    process.env.ACCESS_TOKEN as string
    )
    const refresh_token=tokenHandler.generateToken({
        iat:Math.floor(Date.now()/1000),
        exp:Math.floor(Date.now() / 1000)+(60*60*24*30),
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
        const {access_token,refresh_token}=getTokens(credentials._id,credentials.name)
        return {refresh_token:refresh_token,access_token:access_token};
    } catch (error) {
        return {error:error as string};
    }
}