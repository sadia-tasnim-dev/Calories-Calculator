export const CurrentCook = ({ addCurrentCook }) => {
  return (
    <div>
      <h1 className="text-center text-2xl font-semibold border-b border-orange-200 pb-3">
        Currently Cooking Recipes : {addCurrentCook.length}
      </h1>

      <table className=" text-[#a5a4a4]">
        <thead>
          <th className="pr-7 py-3">Serial</th>
          <th className="pr-11 py-3">Name</th>
          <th className="pr-9 py-3">Time</th>
          <th className="pr-9 py-3">Calories</th>
        </thead>
        <tbody>
          {addCurrentCook.map((wantCook, index) => (
            <tr
              className={`${index % 2 === 0 ? "bg-gray-100 " : "bg-white"}`}
              key={index}
            >
              <td className="pr-7 px-2 py-3">{index + 1}</td>
              <td className="pr-11">{wantCook.recipeName}</td>
              <td className="pr-9">{wantCook.preparingTime} Minutes</td>
              <td className="pr-9">{wantCook.calories} Calories</td>
            </tr>
          ))}
          <tr className=" bg-orange-100 text-[#727171] rounded-r-full font-bold">
            <td></td>
            <td className="text-center">Total: </td>
            <td className="bg-green-100 text-center"> Minute</td>
            <td className="bg-red-100 text-center">
              <div> Calories</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
