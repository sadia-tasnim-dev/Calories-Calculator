export const CurrentCook = ({ addCurrentCook }) => {
  return (
    <div>
      <h1 className="text-center text-2xl font-semibold border-b border-orange-200 pb-3">
        Currently Cooking Recipes : {addCurrentCook.length}
      </h1>
      <table className=" text-[#a5a4a4]">
        <thead>
          <th className="pr-7 pb-3">Serial</th>
          <th className="pr-11 pb-3">Name</th>
          <th className="pr-9 pb-3">Time</th>
          <th className="pr-9 pb-3">Calories</th>
        </thead>
        <tbody>
          {addCurrentCook.map((currentCook, index) => (
            <li key={index}>{currentCook.recipeName}</li>
          ))}
        </tbody>
      </table>
    </div>
  );
};
