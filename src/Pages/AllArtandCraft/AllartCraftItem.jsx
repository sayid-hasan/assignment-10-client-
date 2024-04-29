import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const AllartCraftItem = ({ craftsItem, id }) => {
  const { item_name, user_name, sub_category_name, price } = craftsItem;
  return (
    <tbody className="border-b bg-[#05A081] bg-opacity-10 border-[#05A081] ">
      <tr>
        <td className="px-3 md:text-2xl text-base font-medium text-black ">
          {id}
        </td>
        <td className="px-3 py-2 md:text-base text-sm">
          <p>{item_name}</p>
        </td>
        <td className="px-3 py-2 md:text-base text-sm">
          <span>{sub_category_name}</span>
        </td>
        <td className="px-3 py-2 text-base hidden md:block">
          <p>{user_name}</p>
        </td>
        <td className="px-3 py-2 md:text-base text-sm ">
          <p>{price}</p>
        </td>
        <td className="px-3 py-2 md:text-base text-sm">
          <Link to={`/viewdetails/${craftsItem._id}`}>
            <button className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-[#20c1a1]">
              View Details
            </button>
          </Link>
        </td>
      </tr>
    </tbody>
  );
};
AllartCraftItem.propTypes = {
  craftsItem: PropTypes.object,
  id: PropTypes.number,
};

export default AllartCraftItem;
