import { useState, useEffect } from "react";

import Card from "../components/Card.js";
import title from "../images/recipes.png"

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await fetch("http://localhost:3002/recipes", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        console.log(data);
        setRecipes(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchRecipe();
  }, []);

  return (
    <div className='px-6 py-10 '>
      {/* <h2 className='mb-20 text-center text-6xl leading-9 tracking-wide text-orange-400'>
        Recipes
      </h2> */}
      <div className="flex justify-center mb-10">
      <img src={title} alt="recipes" className="h-[20vh]"/>
      </div>

      <div
        className='grid grid-cols-2 md:grid-cols-3 mx-[10%] gap-8'
        initial='hidden'
        animate='visible'
      >
        {recipes.map((elem, index) => {
          return <Card recipe={elem} />;
        })}
      </div>
    </div>
  );
};

export default Recipes;
