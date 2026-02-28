import Recipe from "../models/recipeModel.js";
import multer from "multer";
import path from "path";


export async function getAllRecipe(req, res) {
    try {
        const recipes = await Recipe.find()
        res.status(200).json(recipes)
    } catch (error) {
        console.log("error in getAllRecipe", error)
        res.status(500).json({ message: "Internal server error" })
    }
}


export const getLatestRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find()
      .sort({ createdAt: -1 }) // newest first
      .limit(3); // only 3 latest

    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



export async function getRecipe(req,res){
    try{
        const findrecipe=await Recipe.findById(req.params.id)
        if(!findrecipe) return res.status(404).json({message:"Recipe not found"})
        res.json(findrecipe)
    }catch(error){
        console.log("error in getRecipe", error)
        res.status(500).json({ message: "Internal server error" })
    }
}



export async function createRecipe(req, res) {
  try {
    const { name, description } = req.body;
    const image = req.file ? req.file.filename : null;

    if (!image) {
      return res.status(400).json({ message: "Image is required" });
    }

    const newRecipe = new Recipe({
      name,
      description,
      image,
    });

    await newRecipe.save();

    res.status(201).json({ message: "Recipe Successfully Added" });
  } catch (error) {
    console.log("error in createRecipe", error);
    res.status(500).json({ message: "Internal server error" });
  }
}


export async function updateRecipe(req,res){
    try{
        const {id,name,description}=req.body
        const upatedRecipe=await Recipe.findByIdAndUpdate(
            req.params.id,
            {id,name,description},
            {
                new:true
            } 
        )

        if (!upatedRecipe) return res.status(404).json({message:"Recipe not found"})
        res.status(200).json({message:"Recipe updated successfully"})
    }catch(error){
        console.log("error in editRecipe", error)
        res.status(500).json({ message: "Internal server error" })
    }
}


export async function deleteRecipe(req,res){
    try{
        const deletedrecipe=await Recipe.findByIdAndDelete(req.params.id)
        if(!deletedrecipe) return res.status(404).json({message:"Recipe not found"})

        res.status(200).json({message:"Recipe deleted successfully"})
    }catch(error){
        console.log("error in deleteRecipe", error)
        res.status(500).json({ message: "Internal server error" })
    }
}