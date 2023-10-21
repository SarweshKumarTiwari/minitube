import validator from "validator"
type verify={
    name?:string
    email?:string
    password?:string
}

export default function verifyData(data:verify){
    const error:string[]=[];
    if (!(data.name&&data.email&&data.password)) {
        return ["you have not inserted some of the fields like name,email or password"]
    }
    if(!validator.isEmail(data.email)){
        error.push("email is not valid");
    }
    if (!validator.isStrongPassword(data.password)) {
        error.push("password is not strong");
    }
    return error;
}