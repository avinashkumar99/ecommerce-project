import React from "react";

const Home = () => {
  return (
    <div className="container">
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 h-screen w-screen">
        <div className="col-span-1">
          <img
            src="/card-img.jpg"
            alt="lady-image"
            className="h-full w-full"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Home;
