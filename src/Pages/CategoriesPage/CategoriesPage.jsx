//import { useEffect } from "react";

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CategoriesPageItem from "./CategoriesPageItem";

const CategoriesPage = () => {
  const location = useLocation();
  const { from } = location.state;
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allartcraftitems")
      .then((res) => res.json())
      .then((data) => {
        const matchedCategories = data.filter(
          (item) => item.sub_category_name === from
        );
        setCategories(matchedCategories);
      });
  }, [from]);

  console.log(categories);
  return (
    <div>
      <h2 className="text-4xl font-bold text-center font-jacquard text-[#05A081]">
        Related to this work
      </h2>
      <div className="my-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {categories.map((item) => (
          <CategoriesPageItem key={item._id} item={item}></CategoriesPageItem>
        ))}
      </div>
    </div>
  );
};

export default CategoriesPage;
