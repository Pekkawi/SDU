import React from "react";

export const TitleDescription = ({ header, description }) => {
  return (
    <div>
      <h1 className=" text-[#222328] text-[2rem]">{header}</h1>
      <h3 className="text-gray-400 font-light">{description}</h3>
    </div>
  );
};

export default TitleDescription;
