import React from "react";

function Help() {
  return (
    <div className="px-8 pt-8 pr-8 sm:px-6 pb-6 border-2 rounded-lg border-[#e6ebf4] bg-white m-2">
      <h1 className="text-[#222328] text-[2rem]">Documentation</h1>
      <p className="mt-6 text-[#666e75] text-[1.2rem]">
        The project contains three levels of documentation. User documentation
        covers the use cases of the everday user, where as administrator
        documentation helps you with the management of the platform. On top of
        that developer documentation is the place to start when you want to
        improve or build upon the platform.
      </p>
      <a href="https://docs.thecore.sdu.dk/">
        <button
          className="text-white bg-purple-500 border border-gray-300 focus:outline-none
           font-medium rounded-md text-sm  mr-2 px-6 py-3 mt-6 mb-6"
          type="button"
        >
          SHOW DOCUMENTATION
        </button>
      </a>
    </div>
  );
}

export default Help;
