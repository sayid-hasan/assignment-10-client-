import { useLoaderData } from "react-router-dom";
import MyartCraftItem from "./MyartCraftItem";
import { useEffect, useState } from "react";

const MyartCraftItems = () => {
  const myCraftsItems = useLoaderData();
  const [items, setItems] = useState(myCraftsItems);
  //console.log(myCraftsItems);
  const handleDrop = (e) => {
    const drop = e.target.value;
    if (drop === "Customization") {
      setItems(myCraftsItems);
    } else {
      const filtredItems = myCraftsItems.filter(
        (myCraftsItemSin) => myCraftsItemSin.customization === drop
      );
      setItems(filtredItems);
    }
  //   fetch(`http://localhost:5000/craftsitems/${drop}`, {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify(),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // };

  return (
    <div>
      <div className="my-5">
        <div className="text-4xl font-jacquard text-[#05A081] font-bold text-center">
          My Arts
        </div>
        <div className="text-left">
          <select
            onChange={(e) => {
              handleDrop(e);
            }}
            name="Customization"
            className=" px-8 py-2 border border-green-700  rounded-lg"
          >
            <option
              value={"Customization"}
              className="px-8 py-2  z-[1]  text-green-600  rounded-box w-52"
            >
              Customization
            </option>
            <option
              value={"Yes"}
              className="px-8 py-2  z-[1]  text-green-600 rounded-box w-52"
            >
              Yes
            </option>
            <option
              value={"No"}
              className="px-8 py-2  z-[1]  text-green-600 rounded-box w-52"
            >
              No
            </option>
          </select>
        </div>
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
    </div>
  );
};

export default MyartCraftItems;
