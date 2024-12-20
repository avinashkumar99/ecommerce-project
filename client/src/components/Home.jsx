import React from "react";
import Hero from "./Hero";
import Content1 from "./Content1";
import Content2 from "./Content2";
import Trending from "./Trending";
import NewsAndBlocks from "./NewsAndBlocks";
import FAQBox from "./FAQBox";

const Home = () => {
  return (
    <div className="w-auto">
      <Hero />
      <div className="w-[100%]">
        {/* <Trending /> */}
        <Content2 />
        <Content1 />

        <NewsAndBlocks />
        <FAQBox />
      </div>
    </div>
  );
};

export default Home;
