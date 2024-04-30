import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyartCraftItem = ({ myCraftsItem, items, setItems }) => {
  const {
    item_name,
    _id,
    customization,
    stock_status,

    image,

    price,
    rating,

    short_description,
  } = myCraftsItem;

  const handleDelete = (id) => {
    // console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          ` https://assignment-10-server-five-navy.vercel.app/updateItem/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
            const remaining = items.filter((item) => item._id !== id);
            setItems(remaining);
          });
      }
    });
  };
  return (
    <div>
      <div className="max-w-xl rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
        <img
          src={image}
          alt=""
          className="object-contain object-center w-full rounded-t-md h-72 dark:bg-gray-500"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl min-h-[80px] font-semibold tracking-wide">
              {item_name}
            </h2>
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
          {/* customization and stock_status */}
          <div className="flex justify-between">
            <div className="flex items-center gap-1">
              <div className="text-xl font-bold">{customization}</div>
            </div>
            <p className="text-xl font-bold ">{stock_status}</p>
          </div>
          {/* update and delete */}
          <div className="flex justify-between">
            <Link to={`/updateItem/${_id}`}>
              <button
                type="button"
                className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md border border-[#20c1a1]"
              >
                Update
              </button>
            </Link>
            <Link>
              <button
                onClick={() => handleDelete(_id)}
                type="button"
                className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md border border-[#20c1a1]"
              >
                Delete
              </button>
            </Link>
          </div>
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
MyartCraftItem.propTypes = {
  myCraftsItem: PropTypes.object,
  items: PropTypes.object,
  setItems: PropTypes.object,
};

export default MyartCraftItem;
