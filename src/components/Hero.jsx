import React from "react";
import Home from "../assets/Home Bg.jpg";
import Button from "./button";

const Hero = () => {
  return (
    <div className="h-screen w-full">
      <div
        className="h-screen after:content-[''] after:w-full after:h-[90%] after:absolute after:bg-black after:top-20 after:left-0 after:opacity-80"
        id="hero"
      >
        <img
          src={Home}
          alt="Home.jpg"
          className="object-cover h-screen w-full"
        />
      </div>
      <div className="text-center absolute top-[40%] left-[27%] translate-[-50%,-50%] py-4">
        <h2 className="text-6xl font-bold text-white py-4">Find Your Dream HOME</h2>
        <p className=" font-semibold text-xl text-slate-300 ">
          We Deliver The Best Homes In The City
        </p>
        <div className="py-8 text-2xl">
          <Button name="Get In touch" />
          <Button name="View Store" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
