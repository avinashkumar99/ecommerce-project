import React from "react";

const Content2 = () => {
  return (
    <div className="w-full h-screen grid grid-cols-1 md:grid-cols-5">
      <div className="h-[90%] w-[100%] my-auto collection-hover-effect">
        <img
          src="/images/sportswear.jpeg"
          className="h-full object-cover"
          alt="sports wear"
        ></img>
      </div>
      <div className="h-[90%] w-[100%] my-auto collection-hover-effect">
        <img
          src="/images/top-skirt.jpg"
          className="h-full object-cover"
          alt="party wear"
        ></img>
      </div>
      <div className="h-[90%] w-[100%] my-auto collection-hover-effect">
        <img
          src="/images/traditional.jpg"
          className="h-full object-cover"
          alt="sports wear"
        ></img>
      </div>
      <div className="h-[90%] w-[100%] my-auto collection-hover-effect">
        <img
          src="/images/casualwear.jpg"
          className="h-full object-cover"
          alt="sports wear"
        ></img>
      </div>
      <div className="h-[90%] w-[100%] my-auto collection-hover-effect">
        <img
          src="/images/onepiece.jpg"
          className="h-full object-cover"
          alt="sports wear"
        ></img>
      </div>
    </div>
  );
};

export default Content2;
