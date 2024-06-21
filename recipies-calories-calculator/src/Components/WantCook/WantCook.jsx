export const WantCook = ({ addWantCook, AddCurrentCook }) => {
  const handleAddCurrentCook = (recipe) => {
    AddCurrentCook(recipe);
  };
  return (
    <div>
      <h1 className="text-center text-2xl font-semibold border-b border-orange-200 pb-3">
        Wanted To Cook Recipes : {addWantCook.length}
      </h1>

      <table className=" text-[#a5a4a4]">
        <thead>
          <th className="pr-7 py-3">Serial</th>
          <th className="pr-11 py-3">Name</th>
          <th className="pr-9 py-3">Time</th>
          <th className="pr-9 py-3">Calories</th>
          <th className="pr-9 py-3">Action</th>
        </thead>
        <tbody>
          {addWantCook.map((wantCook, index) => (
            <tr
              className={`${index % 2 === 0 ? "bg-gray-100 " : "bg-white"}`}
              key={index}
            >
              <td className="pr-7 px-2 py-3">{index + 1}</td>
              <td className="pr-11">{wantCook.recipeName}</td>
              <td className="pr-9">{wantCook.preparingTime} Minutes</td>
              <td className="pr-9">{wantCook.calories} Calories</td>
              <td className="pr-9">
                <button
                  onClick={() => handleAddCurrentCook(wantCook)}
                  className="bg-orange-400 text-white font-bold py-1 px-3 rounded-full"
                >
                  Preparing
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
