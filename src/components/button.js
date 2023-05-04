import React from "react";

const Button = (props) => {
  return (
    <button className="bg-indigo-600 text-white font-semibold px-6 py-2 rounded md:ml-8 hover:bg-indigo-400 duration-500 cursor-pointer md:mt-[-8px]">
      {props.name}
    </button>
  );
};

export default Button;
