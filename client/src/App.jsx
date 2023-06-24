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
        <h1 className="text-[1.5em]">SDU - The Core</h1>
        <div>
          <h1> Log in </h1>
        </div>
      </header>

      <main className="m-0 p-0 w-full bg-[#f9fafe] min-h-[93vh] grid grid-cols-2 gap-0 ">
        <div className="col-span-1 w-[185px] bg-white border-r border-r-[#e6ebf4] ml-0 sticky">
          <LinkTemplate text="Dashboard" source={dashboard} thePath="/" />
          <LinkTemplate text="Machines" source={machines} thePath="/machines" />
          <LinkTemplate text="Profile" source={profile} thePath="/profile" />
          <LinkTemplate text="Users" source={users} thePath="/users" />
          <LinkTemplate text="Nodes" source={nodes} thePath="/nodes" />
          <LinkTemplate
            text="Permissions"
            source={permissions}
            thePath="/permissions"
          />
          <LinkTemplate text="Feedback" source={feedback} thePath="/feedback" />
          <LinkTemplate text="Help" source={help} thePath="/help" />
        </div>

        <div className="col-span-1 w-auto">
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
