import express,{Application} from "express";
import bodyParser from "./config/bodyParser";
import routes from "./routes/auth.routes";
import cookieParser from "cookie-parser";
import cors from "./config/config.cors";
import videoRoutes from "./routes/video.routes";
import channelRoutes from "./routes/channel.routes";

const app:Application=express();
app.use(bodyParser);
app.use(express.urlencoded({extended:false}));

app.use(cookieParser());
app.use(cors);

app.use("/minitube/auth",routes);
app.use("/minitube/videos",videoRoutes);
app.use("/minitube/channels",channelRoutes);

export default app;