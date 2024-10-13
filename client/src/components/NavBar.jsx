import React from "react";

const NavBar = () => {
  return (
    <div
      className="w-full flex justify-around align-middle h-40 bg-gray-50"
      //   style={{ height: "50px" }}
    >
      <div className="flex w-4/5 align-middle justify-around">
        <div className="text-5xl font-semibold font-crimson flex lg:justify-start justify-center items-center">
          <img src="/images/brandIcon.svg" className="h-16 w-16"></img>
          &nbsp; Z Fashion
        </div>
        <div className="text-3xl font-merriweather flex w-1/2 text-gray-500 items-center">
          <a href="" className="mx-4 hover:text-gray-950">
            Home
          </a>
          <a href="" className="mx-4 hover:text-gray-950">
            Shop
          </a>
          <a href="" className="mx-4 hover:text-gray-950">
            Women
          </a>
          <a href="" className="mx-4 hover:text-gray-950">
            Men
          </a>
          <a href="" className="mx-4 hover:text-gray-950">
            Accessories
          </a>
          <a href="" className="mx-4 hover:text-gray-950">
            About Us
          </a>
          <a href="" className="mx-4 hover:text-gray-950">
            Contact Us
          </a>
          <a href="" className="mx-4 hover:text-gray-950">
            Blog
          </a>
        </div>
        <div className="flex text-4xl items-center text-gray-500">
          <a href="">
            <i class="fa-solid fa-magnifying-glass mx-6 hover:text-gray-950"></i>
          </a>
          <a href="">
            <i class="fa-regular fa-heart mx-6 hover:text-gray-950"></i>
          </a>
          <a href="">
            <i class="fa-solid fa-bag-shopping mx-6 hover:text-gray-950"></i>
          </a>
          <a href="">
            <i class="fa-regular fa-user mx-6 hover:text-gray-950"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
