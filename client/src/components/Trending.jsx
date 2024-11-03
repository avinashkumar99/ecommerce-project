import React, { useEffect, useState } from "react";
import { imgSrc } from "../../constants/constant";

const Trending = () => {
  const imgLength = Math.floor(imgSrc.length / 2);
  const [idx, setIdx] = useState(imgLength);

  useEffect(() => {
    const internvalId = setInterval(() => {
      setIdx((prevIdx) => (prevIdx + 1) % imgSrc.length);
    }, 3000);

    return () => clearInterval(internvalId);
  }, [imgSrc.length]);

  const handleIndexNumber = (i) => {
    setIdx(i);
  };

  return (
    <div className="h-screen w-full flex flex-col bg-stone-100 overflow-hidden">
      <div className="md:text-2xl text-center h-[7%] flex items-center mt-auto justify-center">
        <h2 className="font-semibold">
          <span className="py-3 px-6 rounded-md custom-trending">Trending</span>
        </h2>
      </div>

      <div className="w-full h-[70%] flex items-center overflow-hidden justify-center my-auto perspective-container relative ">
        <div
          className="h-full md:w-[20%] w-[90%] mx-auto flex custom-trending-container absolute transition-transform duration-500"
          style={{
            transform: `translateX(${-idx * 100}%)`,
          }}
        >
          {imgSrc.map((src, i) => (
            <img
              src={`${src}`}
              key={i}
              className={`rounded-3xl h-[80%] my-auto transition-all duration-500 
               ${
                 i === idx
                   ? "opacity-100 z-20 shadow-xl"
                   : "opacity-100 shadow-lg"
               }`}
              style={{
                transform:
                  i === idx
                    ? "scale(1.2)"
                    : i < idx
                    ? `scale(${
                        1.2 - (Math.abs(i - idx) * 10) / 100
                      }) translateX(${-(i - idx) * 10}%)`
                    : `scale(${
                        1.2 - (Math.abs(i - idx) * 10) / 100
                      }) translateX(${(idx - i) * 10}%)`,
                zIndex:
                  i > idx ? `${20 - i}` : i < idx ? `${20 - (9 - i)} ` : "20",
                transition: "transform 0.5s ease-in-out",
              }}
              alt={`Trending ${i}`}
            />
          ))}
        </div>
      </div>

      {/* Radio Navigation Buttons */}
      <div className="flex items-center justify-center h-[7%]">
        {imgSrc.map((_, i) => (
          <button
            key={i}
            onClick={() => handleIndexNumber(i)}
            className={`rounded-full mx-2 transition-all duration-500 ease-in-out ${
              idx === i ? "bg-gray-300 h-3 w-3" : "bg-slate-950 h-2 w-2"
            } transition-colors duration-300`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Trending;
