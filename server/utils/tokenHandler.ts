import jwt,{ JwtPayload, SignOptions} from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
class token{

    generateToken(payload:JwtPayload,timelimit?:SignOptions):string{
        return jwt.sign(payload,process.env.ACCESS_TOKEN as string,timelimit)
    }

    verifyToken(token:string){
        try {
            return jwt.verify(token,process.env.ACCESS_TOKEN as string);
        } catch (error) {
            return null;
        }     
    }

}
export default new token();