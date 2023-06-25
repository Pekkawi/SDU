import React from "react";

function Dashboard() {
  return (
    <div className="px-8 pt-8 pr-8 sm:px-6 pb-6 border-2 rounded-lg border-[#e6ebf4] bg-white m-2">
      <h1 className="text-[#222328] text-[2rem]">About this page</h1>
      <p className="mt-6 text-[#666e75] text-[1.2rem]">
        This is the official webpage of the student workshop at SDU Sønderborg.
        It offers a booking system for all manufacturing devices available. To
        be able to use this system, you need to log in with your SDU user
        account.
      </p>
      <button
        className="text-white bg-purple-500 border border-gray-300 focus:outline-none
           font-medium rounded-md text-sm  mr-2 px-6 py-2 mt-6"
      >
        Log in
      </button>
    </div>
  );
}

export default Dashboard;
