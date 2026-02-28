import React from 'react'
import './recipe.css'
import axios from "axios"
import Card from "../../components/card/card"
import { useEffect,useState } from 'react'

const Recipe = () => {
  
  const [recipes, setRecipes] = useState([]);

useEffect(() => {
  const fetchRecipes = async () => {
    try {
      const res = await axios.get("http://localhost:5001/recipe");
      setRecipes(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  fetchRecipes();
}, []);





  return (
    <div className='recipePage'>
      <h1>Recipe</h1>
      <div className="cards">
        {recipes.map((recipe) => (
          <Card
            key={recipe._id || recipe.id}
            name={recipe.name}
            description={recipe.description}
            img={`http://localhost:5001/image/${recipe.image}`}
          />
        ))}
      </div>
    </div>
  )
}

export default Recipe
