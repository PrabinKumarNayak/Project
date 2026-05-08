import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";



//app config
const app = express();
const port  = 4000;

//db connection 
connectDB();

//middleware
app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
    res.send("API Working")
})

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`);
})

//  mongodb+srv://foodapp:12344321@cluster0.ljd81wg.mongodb.net/?appName=Cluster0