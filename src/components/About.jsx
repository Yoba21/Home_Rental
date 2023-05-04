import React from "react";
import HomeAb from "../assets/Home about.jpg";
import Luxury from "../assets/Luxury Real Estate Logo.png";
import HolidayVillageIcon from "@mui/icons-material/HolidayVillage";
import WindowIcon from "@mui/icons-material/Window";
import BathroomIcon from "@mui/icons-material/Bathroom";

const About = () => {
  return (
    <div className="h-screen w-full">
      <div className=" w-[80%] h-full overflow-hidden md:mt-16 md:pt-24 md:pb-12 gap-6 mx-auto grid md:grid-cols-2">
        <div className="my-8 text-gray-800">
          <h2 className="mb-6 text-5xl font-bold">
            Luxury House in
            <br /> Addis
          </h2>
          <img src={Luxury} alt="logo" className=" w-72 h-56 ml-32" />
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            massa ex, faucibus a mauris in, viverra dignissim ante. In volutpat
            sit amet nulla in volutpat. In sollicitudin, lectus ut vehicula
            iaculis, augue urna posuere urna, vitae imperdiet massa velit at
            est. Nulla malesuada eleifend arcu.
          </p>
        </div>
        <div className=" rounded-lg overflow-hidden">
          <img
            src={HomeAb}
            alt="Home.jpg"
            className="object-cover h-full w-full"
          />
        </div>
      </div>
      <div className="flex items-center justify-between px-6 absolute w-[40%] h-[15%] shadow-xl top-[190%] left-[20%] bg-white">
        <div className="flex items-center">
          <HolidayVillageIcon />
          <p className="pl-2">
            <span className=" text-orange-300">52,000</span>
            <br /> square m
          </p>
        </div>
        <div className="flex items-center">
          <WindowIcon />
          <p className="pl-2">
            <span className=" text-orange-300">10</span> <br />
            Total Room
          </p>
        </div>
        <div className="flex items-center">
          <BathroomIcon />
          <p className="pl-2">
            <span className=" text-orange-300">5</span>
            <br />
            bathroom
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
