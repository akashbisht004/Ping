import express from "express";
import * as dotenv from "dotenv";
dotenv.config();
const PORT=process.env.PORT;

const app=express();

app.get("/get",(req,res)=>{
    
})


app.listen(PORT,()=>{
    console.log(`Server is running at port {PORT}`);
    console.log(`SERVER=> http://localhost:{PORT}`);
})