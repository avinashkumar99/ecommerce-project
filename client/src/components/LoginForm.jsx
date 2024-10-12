import React, { useState } from "react";

const LoginForm = () => {
  const [credential, setCredential] = useState(null);
  const handleSumbit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-row mt-0 mx-auto h-full w-full lg:w-10/11 xl:w-5/6 flex-wrap font-playfair tracking-wide flex-shrink-1">
      <div className="h-full xl:w-1/2 w-full text-xl p-24 ">
        <div className="flex flex-col flex-shrink-1 md:mt-16">
          <div className="text-4xl font-semibold font-crimson flex lg:justify-start justify-center items-center">
            <img src="/images/brandIcon.svg" className="h-14 w-14"></img>
            &nbsp; Z Fashion
          </div>
          <div className="my-16 text-7xl font-bold md:mt-24 md:my-20">
            Sign in to your account
          </div>
          <form onSubmit={handleSumbit}>
            <div className="flex flex-col md:h-1/3 h-1/4 justify-end">
              <div className="my-11 flex flex-col">
                <label className="text-5xl font-semibold" htmlFor="email">
                  Email Address
                </label>
                <input
                  placeholder="Email Address"
                  id="email"
                  type="email"
                  className="p-6 text-4xl mt-4 rounded outline-blue-200 border-gray-200 border"
                ></input>
              </div>
              <div className="my-11 flex flex-col">
                <label className="text-5xl font-semibold" htmlFor="pass">
                  Password
                </label>
                <input
                  id="pass"
                  type="password"
                  placeholder="Password"
                  className="p-6 text-4xl mt-4 rounded outline-blue-200 border-gray-200 border"
                ></input>
                <p className="text-end text-3xl font-semibold md:mt-8 hover:text-blue-800 cursor-pointer">
                  Forgot Password?
                </p>
              </div>
              <button className="text-4xl font-bold text-white bg-slate-950 p-10 rounded-lg hover:bg-slate-900 hover:border-gray-400 border">
                SIGN IN
              </button>
              <p className="text-3xl my-12 text-center">
                Don't have an account?{" "}
                <a className="font-bold cursor-pointer hover:text-blue-800 ">
                  Sign up
                </a>
              </p>
            </div>
          </form>
          <hr></hr>
          <div className="flex justify-evenly text-3xl mt-12 sm:flex-wrap">
            <a className="hover:text-blue-800 font-semibold cursor-pointer">
              Terms & Conditions
            </a>
            <a className="hover:text-blue-800 font-semibold cursor-pointer ">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
      <div className="lg:h-screen lg:block hidden xl:w-1/2 w-full text-xl overflow-hidden">
        <img
          src="images/loginImage.jpg"
          alt="fashionModel"
          className="w-full h-full object-cover"
        ></img>
      </div>
    </div>
  );
};

export default LoginForm;
