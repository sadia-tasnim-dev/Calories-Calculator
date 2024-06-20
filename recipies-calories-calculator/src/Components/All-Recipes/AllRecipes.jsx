import { useEffect, useState } from "react";
import { MdOutlineFoodBank } from "react-icons/md";
import { Recipe } from "../Recipe/Recipe";

export const AllRecipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("./../../../public/recipes.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <div>
      <h1 className="flex items-center gap-1 text-2xl font-bold mt-11">
        Our Recipes
        <span className="text-orange-500 text-4xl">
          <MdOutlineFoodBank />
        </span>
      </h1>
      <div className="grid grid-cols-3 gap-4  mt-7">
        {recipes.map((recipe) => (
          <Recipe key={recipe.recipeId} recipe={recipe}></Recipe>
        ))}
      </div>
    </div>
  );
};
