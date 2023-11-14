require('dotenv').config()
// console.log(process.env)
const express = require("express");
const app = express();
const cors = require("cors");
const stripe=require("stripe")("sk_test_51OB9TcSB3m3uX2353mSqmoSEYTv8KheGRWIiI3Qf3D7XUR01osjMrEw5ciPfECt9hu1fwP5wjZaqwTSUuOPWUrvP00vN22vr2O")

app.use(express.json());
app.use(cors());

// checkout api
app.post("/api/create-checkout-session",async(req,res)=>{
    const {products} = req.body;


    const lineItems = products.map((product)=>({
        price_data:{
            currency:"inr",
            product_data:{
                name:product.Name,
                // images:[product.Image]
            },
            unit_amount:product.Price * 100,
        },
        quantity:product.quantity
    }));

    const session = await stripe.checkout.sessions.create({
        payment_method_types:["card"],
        line_items:lineItems,
        mode:"payment",
        success_url:"http://localhost:3000/sucess",
        cancel_url:"http://localhost:3000/cancel",
    });

    res.json({id:session.id})
 
})


app.listen(7000,()=>{
    console.log("server start")
})