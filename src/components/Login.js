import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState();
  const handleToggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9f46b569-aff7-4975-9b8e-3212e4637f16/453ba2a1-6138-4e3c-9a06-b66f9a2832e4/IN-en-20240415-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background"
        />
      </div>
      <form className="absolute left-0 right-0 w-3/12 p-12 mx-auto text-white bg-black my-36 bg-opacity-80">
        <h1 className="py-4 text-3xl font-bold">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full name"
            className="w-full p-4 my-4 bg-gray-700 rounded-lg"
          />
        )}
        <input
          type="email"
          placeholder="Email Address"
          className="w-full p-4 my-4 bg-gray-700 rounded-lg"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-4 my-4 bg-gray-700 rounded-lg"
        />
        <button className="w-full p-4 my-6 bg-red-700 rounded-lg">
          Sign In
        </button>
        <p className="py-4 cursor-pointer" onClick={handleToggleSignInForm}>
          {isSignInForm
            ? "New to NetFlix ? Sign Up "
            : "Already Registered sign in now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
