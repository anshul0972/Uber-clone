const dotenv =require("dotenv");
dotenv.config();
const express =require("express");
const cors = require("cors");
const cookieparser = require("cookie-parser");

const connectToDb=require("./db/db");
const userRoutes=require("./Routers/user_router");

connectToDb();

const app=express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieparser());


app.get("/",(req,res)=>{
    res.send("Hello World");
});

app.use("/users",userRoutes);



module.exports = app;