import jwt,{ JwtPayload, SignOptions,TokenExpiredError,JsonWebTokenError,} from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
class token{

    generateToken(payload:JwtPayload,timelimit?:SignOptions):string{
        try {
            return jwt.sign(payload,process.env.ACCESS_TOKEN as string,timelimit)
        } catch (error) {
            if (error instanceof JsonWebTokenError) {
                return error.message
            }
            return "JSON web token error"
        }
    }

    verifyToken(token:string){
        try {
            return jwt.verify(token,process.env.ACCESS_TOKEN as string);
        } catch (error) {
            if (error instanceof TokenExpiredError) {
                return error.message;
            }
            else if(error instanceof JsonWebTokenError){
                return error.message
            }
            else{
                return null;
            }
        }     
    }

}
export default new token();