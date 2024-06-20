export const Hero = () => {
  return (
    <div className="flex items-center px-8 justify-between gap-14 border border-solid border-orange-300 rounded-3xl mt-7">
      <div>
        <h1 className="text-4xl text-orange-500 font-bold mb-4">
          Discover an exceptional cooking <br /> class tailored for you!
        </h1>
        <p className="text-gray-400">
          The power to transform ordinary ingredients into extraordinary
          culinary creations. This is not merely cooking it is an art form that
          transcends the boundaries of taste, texture, and presentation.
        </p>
        <div className="flex mt-5 gap-5">
          <button className="bg-orange-400 text-white px-4 py-2 rounded-xl font-semibold ">
            Explore Now
          </button>
          <button className="border border-solid border-orange-400 text-orange-500 px-4 py-2 rounded-xl font-semibold">
            Our Feedback
          </button>
        </div>
      </div>
      <img className="h-[500px]" src="./../../../public/image/hero2.png" />
    </div>
  );
};
