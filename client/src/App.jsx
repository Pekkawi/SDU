import React from "react";
import { useState } from "react";

import {
  Dashboard,
  Feedback,
  Machines,
  Nodes,
  Permissions,
  Profile,
  Users,
  Help,
} from "./pages";

import {
  dashboard,
  feedback,
  menu,
  nodes,
  permissions,
  machines,
  shield,
  profile,
  users,
  close,
  help,
} from "./assets";

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { LinkTemplate } from "./components/LinkTemplate";

const App = () => {
  return (
    <BrowserRouter>
      <header className="w-full flex justify-between items-center bg-white m-0 sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4] max-h-[7vh] sticky">
        <h1 className="text-[2em]">SDU - The Core</h1>
        <div>
          <h1> Log in </h1>
        </div>
      </header>

      <main className="m-0 p-0 w-full bg-[#f9fafe] min-h-[93vh] grid grid-cols-8 gap-0 ">
        <div className="col-span-1 bg-white border-r border-r-[#e6ebf4] pl-2">
          <Link className="flex my-5 items-stretch">
            <img src={dashboard} className="w-5 h-5 mr-3 ml-1" />
            <h2>Dashboard</h2>
          </Link>
          <Link className="flex my-5 items-stretch">
            <img src={machines} className="w-5 h-5 mr-3 ml-1 " />
            <h2>Machines</h2>
          </Link>
          <Link className="flex my-5 items-stretch">
            <h2>Profile</h2>
          </Link>
          <Link className="flex my-5 items-stretch">
            <h2>Users</h2>
          </Link>
        </div>

        <div className="col-span-7">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/machines" element={<Machines />} />
            <Route path="/permissions" element={<Permissions />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/users" element={<Users />} />
            <Route path="/help" element={<Help />} />
            <Route path="/nodes" element={<Nodes />} />
          </Routes>
        </div>
      </main>
    </BrowserRouter>
  );
};

export default App;
