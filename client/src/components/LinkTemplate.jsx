import React from "react";

export const LinkTemplate = ({ text, source }) => {
  return (
    <>
      <img src={source} className="w-5 h-5 mr-3 ml-1" />
      <h2>{text}</h2>
    </>
  );
};
