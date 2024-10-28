import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="w-screen h-screen flex border border-blue-400 flex-wrap md:flex-nowrap">
      {/* div for hero content */}
      <div className="flex text-4xl h-full md:w-7/10">
        <div className="flex flex-col w-full p-4 md:p-0 my-auto">
          {/* for showing offer part */}
          <div className="text-center ">
            <h3 className="2xl:text-2xl text-lg font-bold">
              <span></span> Enjoy 50% OFF in Our Summer Super Sale!
            </h3>
          </div>
          {/* some tags for hero section */}
          <div className="text-center my-4 ">
            <h1 className="font-merriweather font-extrabold text-4xl">
              Step into Fashion at Your Ultimate Style Destination!
            </h1>
          </div>
          {/* some paragraphs */}
          <div className="text-center my-3">
            <p className="font-crimson text-lg font-bold text-gray-400">
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
      <div className="h-full md:w-3/10 w-full flex md:justify-end">
        <div className="h-8/10 p-3 flex">
          <img className="" src="/images/heroImg1.png" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
