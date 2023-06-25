import React from "react";
import { TitleDescription } from "../components/TitleDescription";

function Feedback() {
  return (
    <div className="px-8 pt-8 pr-8 sm:px-6 pb-6 border-2 rounded-lg border-[#e6ebf4] bg-white m-2">
      <TitleDescription
        header="Feature request or bug report"
        description="Tell us how we can improve the software"
      />
      <form>
        <div class="mt-7">
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
            className="w-full border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-indigo-500 py-3"
          />
        </div>
        <div class="mt-8">
          <textarea
            type="text"
            placeholder="Description*"
            className="appearance-none w-full border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-indigo-500 pb-14"
          />
        </div>
        <div class="mt-8 mb-5">
          <button
            className="w-full bg-purple-500 py-3 text-center text-white rounded-lg"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Feedback;
