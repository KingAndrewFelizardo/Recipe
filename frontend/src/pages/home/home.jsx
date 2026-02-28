import React from 'react'
import "./home.css"
import Hero from '../../components/hero/hero'
import Title from '../../components/title/title'
import axios from "axios"
import Card from "../../components/card/card"
import { useEffect,useState } from 'react'

const Home = () => {

   const [recipes, setRecipes] = useState([]);

useEffect(() => {
  const fetchRecipes = async () => {
    try {
      const res = await axios.get("http://localhost:5001/recipe/latest");
      setRecipes(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  fetchRecipes();
}, []);


  return (
    <div className='homePage'>
      <Hero/>
      <Title title="Newest"/>

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

      <Title title="Popular"/>
    </div>
  )
}

export default Home
