import { useEffect, useState } from "react";
import { MdOutlineFoodBank } from "react-icons/md";
import { Recipe } from "../Recipe/Recipe";
import { WantCook } from "../WantCook/WantCook";
import { MdScale } from "react-icons/md";
import { CurrentCook } from "../CurrentCook/CurrentCook";
import { toast } from "sonner";
import { IoIosArrowForward } from "react-icons/io";

export const AllRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [addWantCook, setAddWantCook] = useState([]);
  const [addCurrentCook, setAddCurrentCook] = useState([]);

  useEffect(() => {
    fetch("./recipes.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  const handleAddWantCook = (recipe) => {
    for (const wantCook of addWantCook) {
      if (wantCook.recipeId === recipe.recipeId) {
        toast.error("Already exist");
        return;
      }
    }
    setAddWantCook([...addWantCook, recipe]);
  };

  const AddCurrentCook = (recipe) => {
    setAddCurrentCook([...addCurrentCook, recipe]);
  };

  const removeRecipe = (id) => {
    setAddWantCook(addWantCook.filter((recipe) => recipe.recipeId !== id));
  };
  return (
    <div>
      <h1 className="flex items-center gap-2 mt-11 text-2xl font-bold mb-7">
        Calories Calculate Here
        <span className="text-3xl text-orange-500">
          <MdScale />
        </span>
      </h1>
      <div className="flex flex-col justify-center lg:flex-row lg:justify-around border border-solid border-orange-300 rounded-3xl p-5">
        <WantCook
          addWantCook={addWantCook}
          AddCurrentCook={AddCurrentCook}
          removeRecipe={removeRecipe}
        ></WantCook>
        <CurrentCook addCurrentCook={addCurrentCook} />
      </div>
      <h1 className="flex items-center gap-1 text-2xl font-bold mt-11">
        Our Recipes
        <span className="text-orange-500 text-4xl">
          <MdOutlineFoodBank />
        </span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  mt-7">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipeId}
            handleAddWantCook={handleAddWantCook}
            recipe={recipe}
          ></Recipe>
        ))}
      </div>
      <div className=" mt-4 flex gap-3 justify-end ">
        <button className="bg-amber-400 px-3 py-1 text-white font-bold rounded-xl">
          1
        </button>
        <button className="bg-amber-400 px-3 py-1 text-white font-bold rounded-xl">
          2
        </button>
        <button className="border px-2 py-1 border-amber-400  text-amber-400 font-bold text-2xl rounded-xl">
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};
