import React from "react";
import { TitleDescription } from "../components/TitleDescription";
function Profile() {
  return (
    <div className="px-8 pt-8 pr-8 sm:px-6 pb-6 border-2 rounded-lg border-[#e6ebf4] bg-white m-2">
      <TitleDescription header="Profile" description="Your user information" />
    </div>
  );
}

export default Profile;
