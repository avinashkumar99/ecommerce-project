import React, { useState } from "react";

const LoginForm = () => {
  const [credential, setCredential] = useState(null);
  const handleSumbit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-row mt-0 mx-auto h-full w-full lg:w-10/11 xl:w-5/6 flex-wrap font-playfair tracking-wide flex-shrink-1">
      <div className="h-full xl:w-1/2 w-full text-xl 2xl:p-24 md:p-4 p-2 mt-4">
        <div className="flex flex-col flex-shrink-1 2xl:mt-16 mt-10 lg:mt-5">
          <div className="2xl:text-4xl text-lg font-semibold font-crimson flex lg:justify-start justify-center items-center">
            <img
              src="/images/brandIcon.svg"
              className="2xl:h-14 2xl:w-14 h-8 w-8 "
            ></img>
            &nbsp; Z Fashion
          </div>
          <div className="xl:my-10 my-5 2xl:text-7xl text-2xl font-bold md:mt-24 2xl:my-20 text-center md:text-start">
            Sign in to your account
          </div>
          <form onSubmit={handleSumbit}>
            <div className="flex flex-col xl:h-1/3 h-1/4 justify-end mt-3 md:mt-0">
              <div className="2xl:my-11 xl:my-2 my-1 flex flex-col">
                <label
                  className="2xl:text-5xl text-xl font-semibold"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  placeholder="Email Address"
                  id="email"
                  type="email"
                  className="2xl:p-6 p-2 2xl:text-4xl text-lg 2xl:mt-4 mt-2 rounded outline-blue-200 border-gray-200 border"
                ></input>
              </div>
              <div className="2xl:my-11 md:my-4 my-2 flex flex-col">
                <label
                  className="2xl:text-5xl text-xl font-semibold"
                  htmlFor="pass"
                >
                  Password
                </label>
                <input
                  id="pass"
                  type="password"
                  placeholder="Password"
                  className="2xl:p-6 p-2 2xl:text-4xl text-lg 2xl:mt-4 mt-2 rounded outline-blue-200 border-gray-200 border"
                ></input>
                <p className="text-end 2xl:text-2xl text-lg font-semibold xl:mt-8 mt-4 lg:mt-4 hover:text-blue-800 cursor-pointer ">
                  Forgot Password?
                </p>
              </div>
              <button className="2xl:text-4xl md:text-xl text-sm font-bold text-white bg-slate-950 2xl:p-10 p-3 rounded-lg hover:bg-slate-900 hover:border-gray-400 border">
                SIGN IN
              </button>
              <p className="2xl:text-3xl text-lg 2xl:my-12 lg:my-6 my-4 text-center">
                Don't have an account?{" "}
                <a className="font-bold cursor-pointer hover:text-blue-800 ">
                  Sign up
                </a>
              </p>
            </div>
          </form>
          <hr></hr>
          <div className="flex justify-evenly 2xl:text-3xl text-xl 2xl:mt-12 lg:mt-6 mt-3 sm:flex-wrap">
            <a className="hover:text-blue-800 font-semibold cursor-pointer">
              Terms & Conditions
            </a>
            <a className="hover:text-blue-800 font-semibold cursor-pointer ">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
      <div className="md:h-screen md:block hidden xl:w-1/2 w-full text-xl overflow-hidden ">
        <img
          src="images/loginImage.jpg"
          alt="fashionModel"
          className="w-full h-full object-cover"
        ></img>
      </div>
    </div>

    // lets create css using container, row and col of tailwind
    // <div></div>
  );
};

export default LoginForm;
