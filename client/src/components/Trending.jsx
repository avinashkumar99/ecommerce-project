import React, { useState } from "react";
import { imgSrc } from "../../constants/constant";
const imgLength = imgSrc.length / 2;
const Trending = () => {
  const [idx, setIdx] = useState(imgLength);
  const handleIndexNumber = (i) => {
    setIdx(i);
  };

  return (
    <div className="h-screen w-full flex flex-col bg-stone-100 overflow-hidden">
      <div className="md:text-2xl text-center h-[7%] flex  m-auto">
        <h2 className="font-semibold">
          <span className="py-3 px-6 rounded-md custom-trending">Trending</span>
        </h2>
      </div>
      <div className="w-full h-[70%] bg-black my-auto">
        <div className="h-[100%] 2xl:w-[100%] lg:w-[90%] w-full overflow-hidden flex  mx-auto custom-trending-container relative bg-white">
          {imgSrc.map((src, i) => (
            <img
              src={`${src}`}
              id={`img${i}`}
              key={i}
              className="rounded-3xl h-[80%] m-auto p-3 transition-transform duration-500 "
              style={{ transform: `translateX(${-idx * 100}%)` }}
            ></img>
          ))}
        </div>
      </div>
      {/* radio navigation buttons */}
      <div className="w-[30%] h-10 bg-black m-auto">
        {imgSrc.map((_, i) => (
          <button
            key={i}
            onClick={() => handleIndexNumber(i)}
            className={`rounded-full h-3 w-3 mx-2 bg-white ${
              idx === i ? "bg-white" : "bg-gray-600"
            } transition-colors duration-300`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Trending;
