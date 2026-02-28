import mongoose from "mongoose";

export const connectRecipeDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_RECIPE);
        console.log("Mongodb recipe_db connected successfully");
    }catch(error){
        console.log("Error connecting to recipe_db",error);
        process.exit(1);
    }
}