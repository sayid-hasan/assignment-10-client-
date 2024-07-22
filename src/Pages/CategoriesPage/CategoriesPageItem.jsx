import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const CategoriesPageItem = ({ item }) => {
  const {
    _id,
    item_name,

    image,
    sub_category_name,
    price,
    rating,

    processing_time,
    short_description,
    stock_status,
  } = item;
  return (
    <div className="">
      <div className="max-w-xl rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
        <img
          src={image}
          alt=""
          className="object-cover  object-center w-full rounded-t-md h-72 dark:bg-gray-500"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl min-h-[50px] font-semibold tracking-wide">
              {item_name}
            </h2>
            <p className="text-[#05A081] font-semibold font-roboto">
              {sub_category_name}
            </p>
            <p className="min-h-[80px]">{short_description.slice(0, 100)}...</p>
          </div>
          {/* price and rating */}
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
          {/* Processing Time and stock_status */}
          <div className="flex justify-between">
            <div className="flex items-center gap-1">
              <div className="text-xl font-bold">{processing_time}</div>
            </div>
            <p className="text-xl font-bold ">{stock_status}</p>
          </div>
          {/* update and delete */}
          <div className="flex justify-between"></div>
          <Link to={`/viewdetails/${_id}`}>
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
CategoriesPageItem.propTypes = {
  item: PropTypes.object,
};

export default CategoriesPageItem;
