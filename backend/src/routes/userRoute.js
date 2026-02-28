import express from "express"
import { loginUser, registerUser } from "../controllers/userController.js"
import { verifyUser } from "../controllers/userController.js";

const userRoutes =express.Router();

userRoutes.post("/registerUser",registerUser)
userRoutes.post("/loginUser",loginUser)
userRoutes.get("/verify", verifyUser);

export default userRoutes