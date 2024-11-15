import React, { useState } from "react";
import { faqs } from "../../constants/constant";
const FAQBox = () => {
  const [open, setOpen] = useState(null);

  return (
    <div className="h-screen w-full flex justify-center align-middle overflow-hidden">
      <div className="md:w-[90%] w-[98%] flex flex-col mx-auto mt-[5%]">
        <p className="font-semibold text-xl text-slate-400 text-center">FAQ</p>
        <h1 className="font-bold md:text-3xl text-2xl text-center ">
          Have Queries? Refer Here
        </h1>
        <div className="h-auto w-full bg-white">
          {faqs.map((faq, i) => {
            return (
              <div className="w-full m-3" key={i}>
                <div className="">
                  <h3 className="md:text-2xl text-lg font-semibold text-slate-500">
                    {faq.question}{" "}
                    <span
                      className="cursor-pointer"
                      onClick={() => setOpen(open === i ? null : i)}
                    >
                      {open === i ? (
                        <i class="fa-solid fa-caret-down"></i>
                      ) : (
                        <i class="fa-solid fa-caret-up"></i>
                      )}
                    </span>
                  </h3>
                  {open === i && (
                    <p className="text-lg bg-slate-200 text-green-900 p-4 rounded-xl">
                      {faq.answer}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FAQBox;
