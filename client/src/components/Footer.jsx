import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-[50vh] flex justify-center bg-gray-800">
      <div className="bg-white h-4/5 w-4/5 mt-auto mb-auto flex justify-between flex-wrap md:flex-none">
        <div className="h-1/1 w-2/5 bg-slate-600">first</div>
        <div className="h-1/1 w-2/5 bg-slate-600">second</div>
      </div>
    </div>
  );
};

export default Footer;
