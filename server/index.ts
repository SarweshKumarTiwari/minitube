import express,{Application} from "express";
import dotenv from "dotenv";
import bodyParser from "./config/bodyParser";
import connectDB from "./config/connectDB";
import routes from "./routes/auth.routes";
import cookieParser from "cookie-parser";
import cors from "./config/config.cors"

dotenv.config();
const app:Application=express();

app.use(bodyParser);
connectDB();
app.use(cookieParser());
app.use(cors);

app.use(routes);
app.listen(process.env.PORT,()=>{
    try {
        console.log("port is running on "+process.env.PORT);
    } catch (error) {
        console.log(error);
    }
})