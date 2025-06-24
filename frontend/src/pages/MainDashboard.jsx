import React from "react";
import Sidebar from "../component/sidebar";
import Navbar from "../component/navbar";
import Dashboard from "./dashboard";
import ProfilePage from "./ProfilePage";
import { Outlet } from "react-router-dom";

function MainDashboard() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="flex-1 bg-gray-100">
       
         <Outlet/>
        </main>
      </div>
    </div>
  );
}

export default MainDashboard;
