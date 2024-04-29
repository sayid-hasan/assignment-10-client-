import { useLoaderData } from "react-router-dom";
import AllartCraftItem from "./AllartCraftItem";

const AllArtandCraft = () => {
  const craftsItems = useLoaderData();
  console.log(craftsItems);
  return (
    <div>
      <div className="container p-2 mx-auto sm:p-4 text-black ">
        <h2 className="text-center font-jacquard mb-4 text-4xl font-semibold leading-loose text-[#05A081]">
          All Art And Craft
        </h2>
        <div className="mt-5 mb-10">
          <table className="w-full rounded-2xl p-6 text-xs text-left whitespace-wrap">
            <colgroup>
              <col />
              <col />
              <col />
              <col />
              <col />
              <col />
            </colgroup>
            <thead>
              <tr className="bg-[#05A081] bg-opacity-10 ">
                <th className="p-3 text-[#05A081] md:text-lg text-base"></th>
                <th className="p-3 text-[#05A081] md:text-lg text-base">
                  Item Name
                </th>
                <th className="p-3 text-[#05A081] md:text-lg text-base">
                  Sub Category
                </th>
                <th className="p-3 text-[#05A081] hidden md:block md:text-lg text-base">
                  User Name
                </th>
                <th className="p-3 text-[#05A081]  md:text-lg text-base">
                  Price
                </th>
                <th className="p-3 text-[#05A081] md:text-lg text-base">
                  Action
                </th>
              </tr>
            </thead>
            {craftsItems.map((craftsItem, idx) => (
              <AllartCraftItem
                key={idx}
                id={idx + 1}
                craftsItem={craftsItem}
              ></AllartCraftItem>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllArtandCraft;
