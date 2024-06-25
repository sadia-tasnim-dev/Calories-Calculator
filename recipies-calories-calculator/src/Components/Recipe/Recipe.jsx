import { CiClock2 } from "react-icons/ci";
import { GoFlame } from "react-icons/go";

export const Recipe = ({ recipe, handleAddWantCook }) => {
  const {
    imageUrl,
    recipeName,
    description,
    ingredients,
    preparingTime,
    calories,
  } = recipe;

  return (
    <div className=" flex flex-col border border-solid border-orange-300 rounded-3xl p-5">
      <div>
        <img
          className="rounded-2xl mb-5 lg:max-h-[200px] w-full object-cover object-center"
          src={imageUrl}
        />
        <h1 className="font-semibold text-xl mb-3">{recipeName}</h1>
        <p className="text-slate-400 mb-3">{description}</p>
      </div>
      <div className="flex items-center justify-between  mb-5  font-semibold">
        <div className="flex gap-1 items-center bg-red-100 px-3  rounded-xl">
          <CiClock2 />
          <p>{preparingTime} Minutes</p>
        </div>
        <div className="flex gap-1 items-center bg-green-100 px-3  rounded-xl">
          <GoFlame />
          <p>{calories} Calories</p>
        </div>
      </div>
      <div className="border-t mb-4 border-orange-200 pt-3 flex-grow">
        <h1 className="text-xl font-semibold mb-4">
          Ingredients: {ingredients.length}
        </h1>
        <div className="text-slate-400">
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </div>
      </div>

      <button
        onClick={() => handleAddWantCook(recipe)}
        className="bg-orange-400 text-white font-bold px-4 py-2  rounded-full w-fit"
      >
        Want To Cook
      </button>
    </div>
  );
};
