import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CategoriesItem from "./CategoriesItem";

const CategoriesItems = () => {
  useEffect(() => {
    AOS.init({ duration: "200", delay: "70" });
  }, []);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/categoriesItems")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);
  console.log(categories);
  return (
    <div data-aos="fade-up">
      <div className="my-5 font-roboto">
        <h2 className=" md:text-4xl text-center text-2xl mb-2 font-bold font-roboto text-[#20c1a1]">
          Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3  gap-3">
          {categories.map((item) => (
            <CategoriesItem key={item._id} item={item}></CategoriesItem>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesItems;
