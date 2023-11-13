const express=require("express");
const app=express();
const cors=require("cors");
app.use(express.json());
app.use(cors());
const stripe=require("stripe")("sk_test_51OB9TcSB3m3uX2353mSqmoSEYTv8KheGRWIiI3Qf3D7XUR01osjMrEw5ciPfECt9hu1fwP5wjZaqwTSUuOPWUrvP00vN22vr2O")
app.post("/api/create-checkout-session",async(req,res)=>{
  const product=req.body;
  console.log(product)
  const session=await stripe.checkout.sessions.create({
    payment_method_types:["card"],
    //line_items
    mode:"payment",
    success_url:"http://localhost:3000/success",
    cancel_url:"http://localhost:3000/failure"
  });
  res.json({id:session.id})
})
app.listen(7000,()=>{
    console.log("Server started");
})