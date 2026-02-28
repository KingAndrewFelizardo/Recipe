import express from "express";
import dotenv from "dotenv";
import recipeRoutes from "../src/routes/recipeRoutes.js";
import userRoutes from "../src/routes/userRoute.js";
import { connectRecipeDB } from "./config/db.js";
import cors from "cors";
import cookieParser from "cookie-parser";

dotenv.config();

const app=express();
const PORT=process.env.PORT;

connectRecipeDB();

app.use(express.json());
app.use(cookieParser());
app.use("/image", express.static("public/image"));
app.use(cors({
        origin:"http://localhost:5173",
        credentials: true,
    })
);


app.use("/recipe",recipeRoutes)
app.use("/user",userRoutes)

app.listen(PORT,()=>{
    console.log("Server is running on PORT:",PORT)
})