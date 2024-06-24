export const Hero = () => {
  return (
    <div className=" flex flex-col min-[870px]:flex-row items-center px-8 justify-between  min-[870px]:gap-14 border border-solid border-orange-300 rounded-3xl mt-7">
      <div className="pt-7 px-4 ">
        <h1 className="text-center text-2xl md:text-4xl min-[870px]:text-left text-orange-500 font-bold mb-4">
          Our User Friendly Calculator Provides Accurate Calorie Counts
          Information!
        </h1>
        <p className="text-center min-[870px]:text-left text-gray-400">
          The power to transform ordinary ingredients into extraordinary
          culinary creations. This is not merely cooking it is an art form that
          transcends the boundaries of taste, texture, and presentation.
        </p>
        <div className="flex mt-5 gap-5 justify-center min-[870px]:justify-start">
          <button className="bg-orange-400 text-white px-4 py-2 rounded-xl font-semibold ">
            Explore Now
          </button>
          <button className=" border border-solid border-orange-400 text-orange-500 px-4 py-2 rounded-xl font-semibold">
            Our Feedback
          </button>
        </div>
      </div>
      <img
        className="w-full max-h-[500px] object-cover pb-5 "
        src="./image/hero2.png"
      />
    </div>
  );
};
