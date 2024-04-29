import { useLoaderData } from "react-router-dom";
import MyartCraftItem from "./MyartCraftItem";

const MyartCraftItems = () => {
  const myCraftsItems = useLoaderData();
  console.log(myCraftsItems);
  return (
    <div>
      <div className="my-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {myCraftsItems.map((myCraftsItem) => (
          <MyartCraftItem
            key={myCraftsItem._id}
            myCraftsItem={myCraftsItem}
          ></MyartCraftItem>
        ))}
      </div>
    </div>
  );
};

export default MyartCraftItems;
