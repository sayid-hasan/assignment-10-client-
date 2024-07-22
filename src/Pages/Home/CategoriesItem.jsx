import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const CategoriesItem = ({ item }) => {
  const { image, sub_category_name } = item;
  return (
    <Link
      to={`/categorypage/${sub_category_name}`}
      state={{ from: sub_category_name }}
    >
      <div>
        <div className="card  bg-base-100 rounded-sm shadow-xl box-border ">
          <div className="card-body relative ">
            <h2 className="text-[#8750fd] font-black min-h-5 text-center absolute bottom-1 left-1/2 -translate-x-1/2">
              {sub_category_name}
            </h2>
            <div className="object-cover object-center h-[250px] w-full box-border rounded-md">
              <img
                src={image}
                className=" object-cover object-center rounded-md h-[250px] w-full hover:scale-105 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
CategoriesItem.propTypes = {
  item: PropTypes.object,
};
export default CategoriesItem;
