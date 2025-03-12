import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="min-h-screen flex flex-row justify-center items-center md:px-32 px-5 bg-[url('./assets/landing.png')] bg-cover bg-no-repeat z-0">
      <div className="flex flex-col justify-center items-center md:w-1/3 text-center">
        <h1 className="text-8xl font-semibold text-white">
          WELCOME TO BUSINESS PARTNERSHIP COLLABORATION!
        </h1>

        <div className="mt-5 flex justify-center">
          <Link to="/signup">
            <button className="bg-white rounded-full p-4 text-xl font-normal">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
