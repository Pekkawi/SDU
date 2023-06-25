import React from "react";
import { TitleDescription } from "../components/TitleDescription";
function Nodes() {
  return (
    <div className="px-8 pt-8 pr-8 sm:px-6 pb-6 border-2 rounded-lg border-[#e6ebf4] bg-white m-2">
      <TitleDescription
        header="Feature request or bug report"
        description="Tell us how we can improve the software"
      />
    </div>
  );
}

export default Nodes;
