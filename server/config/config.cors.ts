import cors from 'cors'
export default cors({
    credentials:true,
    origin:process.env.ORIGIN,
    methods:["GET","POST","PUT","DELETE"],
    allowedHeaders:['Content-Type','Authorization',"Accept"],

});