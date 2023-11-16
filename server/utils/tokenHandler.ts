import jwt,{ JwtPayload, SignOptions} from "jsonwebtoken";
class token{

    generateToken(payload:JwtPayload,secret:string,timelimit?:SignOptions):string{
            return jwt.sign(payload,secret,timelimit)
        
    }

    verifyToken(token:string,secret:string){
        return jwt.verify(token,secret);
    }

}
export default new token();