import { useContext, useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import CraftItem from "./CraftItem";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";

const CraftItems = () => {
  const { loading } = useContext(AuthContext);

  const [craftItems, setCraftItems] = useState([]);
  useEffect(() => {
    fetch("https://assignment-10-server-five-navy.vercel.app/craftsitems")
      .then((res) => res.json())
      .then((data) => {
        setCraftItems(data);
      });
  }, []);
  if (loading) {
    return (
      <>
        <div className="flex justify-center">
          <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-[#05A081]"></div>
        </div>
      </>
    );
  }

  return (
    <Fade>
      <div className="my-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="md:text-4xl text-2xl mb-2 font-bold font-roboto text-[#20c1a1]">
            Discover Handcrafted Arts
          </h2>
          <p className="text-black text-opacity-50 font-roboto ">
            Explore our curated collection of artisanal art items, where
            creativity meets craftsmanship. Each piece is thoughtfully crafted
            with passion and precision, offering a glimpse into the world of
            handmade wonders
          </p>
        </div>

        <div className="my-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {craftItems.map((craftItem) => (
            <CraftItem key={craftItem._id} craftItem={craftItem}></CraftItem>
          ))}
        </div>
      </div>
    </Fade>
  );
};

export default CraftItems;
