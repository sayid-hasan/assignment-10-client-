//import React from 'react';

import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <h2>MainLayout MainLayout</h2>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
