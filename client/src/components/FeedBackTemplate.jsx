import React from "react";

const FeedBackTemplate = () => {
  return (
    <div>
      <h1 className=" text-[#222328] text-[2rem]">
        Feature request or bug report
      </h1>
      <h3 className="text-gray-400 font-light">
        Tell us how we can improve the software
      </h3>
      <form>
        <div class="mt-5">
          <select
            required
            placeholder="Type*"
            className="w-full border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-left"
            data-te-select-init
          >
            <option value="0">Feature Request</option>
            <option value="1">Bug report</option>
          </select>
        </div>
        <div class="mt-8">
          <input
            type="text"
            placeholder="Title*"
            className="w-full border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-indigo-500 "
          />
        </div>
        <div class="mt-8">
          <textarea
            type="text"
            placeholder="Description*"
            className="appearance-none w-full border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-indigo-500 "
          />
        </div>
        <div class="mt-8 mb-5">
          <button
            className="w-full bg-purple-500 py-3 text-center text-white rounded-lg"
            type="button"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FeedBackTemplate;
