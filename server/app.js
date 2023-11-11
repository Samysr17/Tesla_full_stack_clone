const express=require("express");
const app=express();
const cors=require("cors");
app.use(express.json());
app.use(cors());
app.listen(7000,()=>{
    console.log("Server started");
})