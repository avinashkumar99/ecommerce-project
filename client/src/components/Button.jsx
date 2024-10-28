import React from "react";

const Button = ({ name, iconName, color, textSize }) => {
  return (
    <div className="">
      <button className="custom-button rounded-3xl 2xl:text-6xl 2xl:p-10 2xl:mt-16">
        {name} &nbsp;
        <i className={iconName} style={{ color: { color } }}></i>
      </button>
    </div>
  );
};

export default Button;
