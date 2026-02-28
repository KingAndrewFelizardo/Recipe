import express from "express"
import { createRecipe, deleteRecipe, getAllRecipe, getRecipe, getLatestRecipes, updateRecipe }from "../controllers/recipeController.js"
import upload from "../config/uploadImage.js"

const recipeRoutes =express.Router();

recipeRoutes.get("/",getAllRecipe)
recipeRoutes.get("/search/:id",getRecipe)
recipeRoutes.get("/latest",getLatestRecipes)
recipeRoutes.post("/", upload.single("image"), createRecipe);
recipeRoutes.put("/search/:id",updateRecipe)
recipeRoutes.delete("/:id",deleteRecipe)

export default recipeRoutes