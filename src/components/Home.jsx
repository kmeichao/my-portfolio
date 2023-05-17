import React from "react";
import Unnamed from "../assets/unnamed.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-slate-200 via-slate-200 to-cyan-200
     "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold">
            Full Stack Developer
          </h2>
          <p className="text-gray-900 py-4 max-w-md">
            Currently a second year UCLA student, majoring in Computer Science.
            I enjoy working on projects using React, Next JS, React Native.
          </p>
          <div>
            <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-slate-900 cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={20} />
              </span>
            </button>
          </div>
        </div>

        <div>
          <img
            src={Unnamed}
            alt="my profile photo"
            className="shadow-lg rounded-full mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
