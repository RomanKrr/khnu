import express from 'express'
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import cors from "cors"

import path from "path";

import { connectDB } from "./lib/db.js"
import authRoutes from "./routes/auth.route.js"

dotenv.config();
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true  
}))
const PORT = process.env.PORT;
const __dirname = path.resolve();

app.use("/api/auth", authRoutes)

if(process.env.NODE_ENV==="development"){
    app.use(express.static(path.join(__dirname, "../frontend/dist")));

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"))
    });
}

app.listen(PORT, ()=> {
    console.log('Hello server' + PORT);
    connectDB();
});