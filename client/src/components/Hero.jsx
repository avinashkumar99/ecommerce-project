import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="w-screen flex flex-wrap md:flex-nowrap bg-slate-100 overflow-clip custom-height">
      {/* div for hero content */}
      <div className="flex text-4xl h-full md:w-[60%] my-auto">
        <div className="flex flex-col w-full p-4 md:p-0 my-auto 2xl:ms-20">
          {/* for showing offer part */}
          <div className="text-center">
            <h3 className="2xl:text-5xl text-lg font-bold 2xl:mb-5 mb-2">
              <span className="rounded-3xl 2xl:px-12 2xl:py-4 bg-white">
                Enjoy 50% OFF in Our Summer Super Sale!
              </span>
            </h3>
          </div>
          {/* some tags for hero section */}
          <div className="text-center my-4 ">
            <h1 className="font-merriweather font-extrabold text-4xl 2xl:text-8xl 2xl:my-12 2xl:tracking-wide">
              Step into Fashion at Your Ultimate Style Destination!
            </h1>
          </div>
          {/* some paragraphs */}
          <div className="text-center my-3">
            <p className="font-crimson text-lg font-bold text-gray-400 2xl:text-4xl 2xl:tracking-widest">
              Explore a World of Fashion Possibilities with Exclusive Discounts
              - Dive into Your Ultimate Style Destination and Elevate Your
              Wardrobe Today!
            </p>
          </div>
          {/* show now button */}
          <div className="text-center">
            <Button
              name={"Shop Now"}
              iconName={"fa-solid fa-arrow-right"}
              color={"white"}
              textSize={"xl"}
            />
          </div>
        </div>
      </div>
      {/* div for image content */}
      <div className="h-full md:w-[40%] w-full md:flex md:justify-end hidden lg:block">
        <div className="h-8/10 p-3 flex custom-hero-effect">
          <img className="" src="/images/heroImg1.png" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
