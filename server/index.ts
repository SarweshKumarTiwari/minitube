import dotenv from "dotenv";
dotenv.config();
import App from "./app";
import connectDB from "./config/connectDB";


connectDB().then(()=>{
    App.listen(process.env.PORT,()=>{
        try {
            console.log("port is running on "+process.env.PORT);
        } catch (error) {
            console.log(error);
        }
    })
}).catch((error)=>{
    console.log(error);
})


