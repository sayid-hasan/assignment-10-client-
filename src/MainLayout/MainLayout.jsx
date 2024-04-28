//import React from 'react';

import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <div className="max-w-[1250px] mx-auto ">
        <Navbar></Navbar>
        <div className="min-h-[350px] block">
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
