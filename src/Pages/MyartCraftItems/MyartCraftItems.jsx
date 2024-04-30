import { useLoaderData } from "react-router-dom";
import MyartCraftItem from "./MyartCraftItem";
import { useState } from "react";

const MyartCraftItems = () => {
  const myCraftsItems = useLoaderData();
  const [items, setItems] = useState(myCraftsItems);
  //console.log(myCraftsItems);
  return (
    <div>
      <div className="my-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((myCraftsItem) => (
          <MyartCraftItem
            key={myCraftsItem._id}
            items={items}
            setItems={setItems}
            myCraftsItem={myCraftsItem}
          ></MyartCraftItem>
        ))}
      </div>
    </div>
  );
};

export default MyartCraftItems;
