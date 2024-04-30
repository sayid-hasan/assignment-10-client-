//import React from 'react';

import Banner from "./Banner";
import CategoriesItems from "./CategoriesItems";
import ContactUs from "./ContactUs";
import CraftItems from "./CraftItems";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <CraftItems></CraftItems>
      <CategoriesItems></CategoriesItems>
      <Testimonials></Testimonials>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;
