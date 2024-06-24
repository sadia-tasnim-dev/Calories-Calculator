import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";

export const Footer = () => {
  return (
    <div className="mt-8 bg-orange-400 p-16  ">
      <div className="flex flex-col gap-7 md:flex-row md:gap-28">
        <div>
          <h1 className="text-center md:text-left playwrite text-white text-5xl font-bold mb-4">
            Get In Touch
          </h1>
          <p className="text-center md:text-left text-neutral-200 mb-4">
            Your feedback matters! Reach out to us with any questions,
            suggestions, or inquiries about our recipe calorie calculator. We
            are here to help you make informed choices about your nutrition and
            cooking habits.
          </p>
          <div className="flex justify-center md:justify-start gap-3 mb-4">
            <FaInstagram className="bg-white px-2 rounded-xl text-4xl text-orange-700" />

            <FaLinkedinIn className="bg-white px-2 rounded-xl text-4xl text-orange-700" />
            <FaFacebookF className="bg-white px-2 rounded-xl text-4xl text-orange-700" />
            <FaTwitter className="bg-white px-2 rounded-xl text-4xl text-orange-700" />
          </div>
        </div>
        <div className="flex flex-col  md:flex-row gap-7">
          <div className="bg-orange-200 p-24 rounded-tl-3xl rounded-br-3xl relative  ">
            <div className="flex flex-col px-6 py-16 justify-center text-end bg-orange-100  rounded-tl-3xl rounded-br-3xl bottom-3 right-3 -top-3 -left-3 absolute">
              <div className="bg-white mx-auto w-fit p-2 rounded-xl text-xl text-orange-700 ">
                <MdOutlinePhoneInTalk />
              </div>
              <h1 className="text-center text-orange-700 font-semibold text-nowrap mt-3">
                Contact: 0171052876
              </h1>
            </div>
          </div>
          <div className="bg-orange-200 p-24 rounded-tl-3xl rounded-br-3xl relative  ">
            <div className="flex flex-col px-8 py-16 justify-center text-end bg-orange-100  rounded-tl-3xl rounded-br-3xl bottom-3 right-3 -top-3 -left-3 absolute">
              <div className="bg-white mx-auto w-fit p-2 rounded-xl text-xl text-orange-700 ">
                <MdOutlineEmail />
              </div>
              <h1 className="text-center text-orange-700 font-semibold text-nowrap mt-3">
                sadia@gmail.com
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
