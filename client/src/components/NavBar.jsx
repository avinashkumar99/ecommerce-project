import React from "react";

const NavBar = () => {
  return (
    <div
      className="w-full flex justify-around align-middle  bg-gray-50"
      style={{ height: "100px" }}
    >
      <div className="flex 2xl:w-4/5 w-full px-5 align-middle">
        <div className="text-xl xl:text-2xl w-1/6 font-semibold font-crimson flex lg:justify-start justify-center items-center m-2">
          <img src="/images/brandIcon.svg" className="h-8 w-8"></img>
          &nbsp; Z &nbsp;Fashion
        </div>
        <div className="sm:text-md md:text-lg  font-merriweather flex 2xl:w-1/2 w-2/3 text-gray-500 items-center justify-evenly">
          <a href="" className="mx-4 hover:text-gray-950">
            Home
          </a>
          <a href="" className="mx-4 hover:text-gray-950">
            Shop
          </a>
          <a href="" className="mx-4 hover:text-gray-950">
            Women
          </a>
          {/* <a href="" className="mx-4 hover:text-gray-950">
            Men
          </a> */}
          <a href="" className="mx-4 hover:text-gray-950">
            Accessories
          </a>
          {/* <a href="" className="mx-4 hover:text-gray-950">
            About Us
          </a> */}
          <a href="" className="mx-4 hover:text-gray-950">
            Contact Us
          </a>
          <a href="" className="mx-4 hover:text-gray-950">
            Blog
          </a>
        </div>
        <div className="flex text-lg  items-center text-gray-500 ms-auto">
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
