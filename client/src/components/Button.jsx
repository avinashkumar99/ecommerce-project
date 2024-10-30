import React from "react";

const Button = ({ name, iconName, color, textSize }) => {
  return (
    <div className="">
      <button className="custom-button rounded-xl md:text-lg text-xs md:px-8 md:mt-10">
        {name} &nbsp;
        <i className={iconName} style={{ color: { color } }}></i>
      </button>
    </div>
  );
};

export default Button;
