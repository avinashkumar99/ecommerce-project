import React from "react";
import Hero from "./Hero";
import Content1 from "./Content1";
import Content2 from "./Content2";
import Trending from "./Trending";

const Home = () => {
  return (
    <div className="container">
      <Hero />
      <div className="w-screen">
        <Content1 />
        <Content2 />
        <Trending />
      </div>
    </div>
  );
};

export default Home;
