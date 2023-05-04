import React from "react";
import BedIcon from "@mui/icons-material/Bed";
import ShowerIcon from "@mui/icons-material/Shower";
import HouseSidingIcon from "@mui/icons-material/HouseSiding";

const House = ({ house }) => {
  const { image, type, country, address, bedrooms, bathrooms, surface, price } =
    house;
  return (
    <div className="">
      <div className=" bg-white rounded-lg rounded-tl-[90px] p-5 shadow-lg w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl">
        <img src={image} alt="" className="mb-8" />
        <div className="text-sm flex gap-x-2 mb-4">
          <div className=" bg-green-500 rounded-full px-3 text-white">
            {type}
          </div>
          <div className=" bg-blue-500 rounded-full px-3 text-white">
            {country}
          </div>
        </div>
        <div className="text-lg font-semibold max-w-[260px]">{address}</div>
        <div className="flex gap-x-4 my-4 items-center">
          <div className=" flex gap-x-1 items-center text-gray-600">
            <div>
              <BedIcon />
            </div>
            <div>{bedrooms}</div>
          </div>
          <div className=" flex gap-x-1 items-center text-gray-600">
            <div>
              <ShowerIcon />
            </div>
            <div>{bathrooms}</div>
          </div>
          <div className=" flex gap-x-1 items-center text-gray-600">
            <div>
              <HouseSidingIcon />
            </div>
            <div>{surface}</div>
          </div>
        </div>
        <div className="text-lg font-semibold mb-4 text-blue-500">{price}</div>
      </div>
    </div>
  );
};

export default House;
