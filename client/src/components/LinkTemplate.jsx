import React from "react";
import { Link } from "react-router-dom";

export const LinkTemplate = ({ text, source, thePath }) => {
  return (
    <>
      <Link
        className="flex py-4 border-y border-y-[#e6ebf4] hover:bg-gray-100 pl-4 select-none"
        to={thePath}
      >
        <img src={source} className="w-5 h-5 mr-5 " />
        <h2>{text}</h2>
      </Link>
    </>
  );
};
