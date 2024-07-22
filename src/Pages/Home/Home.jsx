//import React from 'react';

import { Helmet } from "react-helmet";
import Banner from "./Banner";
import CategoriesItems from "./CategoriesItems";
import ContactUs from "./ContactUs";
import CraftItems from "./CraftItems";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Banner></Banner>
      <CraftItems></CraftItems>
      <CategoriesItems></CategoriesItems>
      <Testimonials></Testimonials>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;
