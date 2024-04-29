import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const CraftItem = ({ craftItem }) => {
  const {
    item_name,
    _id,

    image,

    price,
    rating,

    short_description,
  } = craftItem;

  return (
    <div>
      <div className="max-w-xl rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
        <img
          src={image}
          alt=""
          className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl min-h-[80px] font-semibold tracking-wide">
              {item_name}
            </h2>
            <p className="min-h-[80px]">{short_description.slice(0, 100)}...</p>
          </div>
          <div className="flex justify-between">
            <div className="flex items-center gap-1">
              <div className="text-xl font-bold">{rating}</div>

              <div className="rating rating-sm">
                <input
                  type="radio"
                  name="rating-7"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
            </div>
            <p className="text-xl font-bold ">
              {price}
              <span className="text-[#20c1a1] inline-block ml-1">$</span>
            </p>
          </div>
          <Link to={`viewdetails/${_id}`}>
            <button
              type="button"
              className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-[#20c1a1]"
            >
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
CraftItem.propTypes = {
  craftItem: PropTypes.object,
};
export default CraftItem;
