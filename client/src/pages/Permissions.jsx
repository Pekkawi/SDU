import React from "react";
import { TitleDescription } from "../components/TitleDescription";
import { help } from "../assets";

function Permissions() {
  return (
    <div className="px-8 pt-8 pr-8 sm:px-6 pb-6 border-2 rounded-lg border-[#e6ebf4] bg-white m-2">
      <TitleDescription
        header="New permission"
        description="Create a new device group"
      />

      <form action="#">
        <div class="grid grid-cols-2 gap-5 mt-7">
          <input
            type="text"
            placeholder="Name*"
            className="w-full border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-left py-4"
          />
          <input
            type="text"
            placeholder="Abbreviation*"
            className="w-full border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-left py-4"
          />
        </div>
        <div class="mt-8">
          <textarea
            type="text"
            placeholder="Description"
            className="appearance-none w-full border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-indigo-500 pb-14 "
          />
        </div>

        <div class="grid grid-cols-2 gap-5 mt-7">
          <select
            required
            className="w-full border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-left"
            data-te-select-init
          >
            <option value="0">On Demand</option>
            <option value="1">Locking</option>
          </select>

          <img src={help} className="w-6 h-6 ml-3 mt-2 items-center" />
        </div>

        <div class="grid grid-cols-2 gap-5 mt-7">
          <select
            required
            className="w-full border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-left"
            data-te-select-init
          >
            <option value="0">Open</option>
          </select>

          <img src={help} className="w-6 h-6 ml-3 mt-2 items-center" />
        </div>

        <div class="mt-5 flex flex-col items-center">
          <button class="w-3/12 bg-purple-500 py-3 rounded-lg text-center text-white">
            Create Permission
          </button>
        </div>
      </form>
    </div>
  );
}

export default Permissions;
