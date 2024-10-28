import React from "react";

const Content1 = () => {
  return (
    <div className="h-auto bg-white 2xl:w-[70%] lg:w-[80%] md:w-[90%] 2xl:text-4xl flex justify-center mx-auto 2xl:my-16 md:my-8">
      <div className="2x:text-4xl grid md:grid-cols-3 gap-4 2xl:gap-10 grid-cols-1 w-[100%]">
        <div className="h-auto w-[50%] flex mx-auto p-1">
          <div className="2xl:text-4xl me-2 flex my-auto">
            <i class="fa-solid fa-box text-8xl text-blue-700"></i>
          </div>
          <div className="text-2xl flex my-auto flex-col ms-2">
            <p className="font-bold 2xl:text-5xl mb-2">Free Shipping</p>
            <p className="2xl:text-3xl font-semibold text-slate-600">
              Free Shipping for order above $180
            </p>
          </div>
        </div>
        <div className="h-auto w-[50%] flex mx-auto p-1">
          <div className="2xl:text-4xl me-2 flex my-auto">
            <i class="fa-solid fa-box text-8xl text-blue-700"></i>
          </div>
          <div className="text-2xl flex my-auto flex-col ms-2">
            <p className="font-bold 2xl:text-5xl mb-2">Flexible Payment</p>
            <p className="2xl:text-3xl font-semibold text-slate-600">
              Multiple secure payment options
            </p>
          </div>
        </div>
        <div className="h-auto w-[50%] flex mx-auto p-1">
          <div className="2xl:text-4xl me-2 flex my-auto">
            <i class="fa-solid fa-box text-8xl text-blue-700"></i>
          </div>
          <div className="text-2xl flex my-auto flex-col ms-2">
            <p className="font-bold 2xl:text-5xl mb-2">24*7 Support</p>
            <p className="2xl:text-3xl font-semibold text-slate-600">
              We Support Online all days
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content1;