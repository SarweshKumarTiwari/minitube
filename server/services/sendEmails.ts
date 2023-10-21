import nodemailer from "nodemailer";
import dotenv from "dotenv"
import Mail from "nodemailer/lib/mailer";
dotenv.config();

const transport=nodemailer.createTransport({
    service:"gmail",
    host:"smtp.gmail.com",
    port: 587,
    secure: false,
    auth:{
        user:process.env.SENDER_EMAIL,
        pass:process.env.SENDER_PASSWORD
    }
});

export default async function sendMail(recipient:Mail.Options){
    const result=await transport.sendMail({...recipient,from:process.env.SENDER_EMAIL});
    if (result.accepted) {
        return true;
    }
    return false;
}