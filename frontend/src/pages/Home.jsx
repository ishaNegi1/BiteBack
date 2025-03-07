import React from "react";
import { Link } from "react-router";
import { img } from "../assets/pictures";

const Home = () => {
  return (
    <div className=" bg-[#FFFFFF] h-screen">
      <div className=" text-[#FFFFFF] sm:h-2/3 h-auto flex relative overflow-hidden">
        <div
          className=" absolute inset-0 bg-cover bg-center bg-no-repeat sm:hidden block"
          style={{
            backgroundImage: `url(${img})`,
          }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-80"></div>

        <div className="relative z-10 sm:flex sm:flex-col sm:w-[60%] mt-5 sm:ml-6 sm:-mr-24 p-4">
          <div className="sm:w-[106%] text-center font-Pacifico sm:text-[1.5rem] text-[1.2rem] px-2 sm:px-0">
            <p>
              "Every meal saved is a life nourished and a planet preserved.
              Let's waste less and care more!"
            </p>
          </div>
          <div className="w-[100%] text-center font-Nunito sm:text-xl text-[1rem] sm:mt-7 mt-5 px-2">
            <p>
              Food waste harms both people and the environment. Our platform
              helps reduce waste through food donations, compost collection,
              leftover recipes, and sustainability blogs. Join us in creating a
              waste-free, hunger-free future!
            </p>
          </div>
          <div className="sm:w-[100%] text-center">
            <Link to="/signup">
              <button className="bg-[#fa453c] text-[#FFFFFF] py-1 rounded-lg w-40 sm:mx-auto text-xl font-medium transition-all duration-500 ease-linear transform hover:scale-110 font-Coustard mt-4 mb-5">
                JOIN US
              </button>
            </Link>
          </div>
        </div>
        <div
          style={{ backgroundImage: `url(${img})` }}
          className=" w-[60%] bg-no-repeat bg-contain sm:block hidden"
        ></div>
      </div>
      <div className="bg-[#85CA81] h-16 flex items-center overflow-hidden whitespace-nowrap mt-1">
        <div className="flex space-x-16 text-white text-2xl font-semibold animate-marquee">
          <p>Donate Food</p>
          <p>Compost Collection</p>
          <p>Leftover Recipes</p>
          <p>Awareness Blogs</p>
          <p>Organic Fertilizer</p>
        </div>
        <div className="flex space-x-16 text-white text-2xl font-semibold animate-marquee ml-12">
          <p>Donate Food</p>
          <p>Compost Collection</p>
          <p>Leftover Recipes</p>
          <p>Awareness Blogs</p>
          <p>Organic Fertilizer</p>
        </div>
      </div>
      <div>
        <h1 className=" text-[#133221] font-Nunito font-bold text-2xl text-center mt-3">OUR SERVICES</h1>
      </div>
    </div>
  );
};

export default Home;
