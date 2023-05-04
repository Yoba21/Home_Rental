import React, { useContext } from "react";
import { HouseContext } from "./HouseContext";
import House from "./House";
import { Link } from "react-router-dom";

const HouseList = () => {
  const { houses, loading } = useContext(HouseContext);
  return (
    <section className="mb-20">
      <div className="container mx-auto">
        <div className="my-20"><h2 className="text-center text-4xl font-bold py-4">Discover Featured Home's</h2>
        <p className="text-xl py-4 text-center">Find And Enjoy a good place to stay!!</p></div>
        <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14">
          {houses.map((house, index) => {
            return (
              <Link to={`/property/${house.id}`} key={index}>
                <House house={house} />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HouseList;
