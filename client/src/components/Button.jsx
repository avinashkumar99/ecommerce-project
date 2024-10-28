import React from "react";

const Button = ({ name, iconName, color, textSize }) => {
  return (
    <div className="">
      <button className="custom-button rounded-3xl ">
        {name} &nbsp;
        <i className={iconName} style={{ color: { color } }}></i>
      </button>
    </div>
  );
};

export default Button;
