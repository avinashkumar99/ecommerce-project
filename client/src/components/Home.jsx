import React from "react";
import Hero from "./Hero";
import Content1 from "./Content1";
import Content2 from "./Content2";

const Home = () => {
  return (
    <div className="container">
      <Hero />
      <div className="w-screen">
        <Content1 />
        <Content2 />
      </div>
    </div>
  );
};

export default Home;
