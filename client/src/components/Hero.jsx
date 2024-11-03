import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="w-[100%] flex flex-wrap md:flex-nowrap bg-slate-100 overflow-clip custom-height">
      {/* div for hero content */}
      <div className="flex h-full md:w-[60%] my-auto">
        <div className="flex flex-col w-full p-2 md:p-0 my-auto 2xl:ms-20">
          {/* for showing offer part */}
          <div className="text-center">
            <h3 className="md:text-xl text-sm  font-bold lg:mb-5 mb-2">
              <span className="rounded-3xl lg:px-10 lg:py-3 bg-white">
                Enjoy 50% OFF in Our Summer Super Sale!
              </span>
            </h3>
          </div>
          {/* some tags for hero section */}
          <div className="text-center my-2 ">
            <h1 className="font-merriweather font-extrabold text-2xl md:text-3xl lg:my-8 lg:tracking-wide">
              Step into Fashion at Your Ultimate Style Destination!
            </h1>
          </div>
          {/* some paragraphs */}
          <div className="text-center my-3">
            <p className="font-crimson text-sm font-bold text-gray-400 md:text-lg   lg:tracking-widest">
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
              textSize={"lg"}
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
