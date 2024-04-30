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
        <div className="card  bg-base-100 rounded-sm shadow-xl">
          <div className="card-body">
            <h2 className="text-green-300 min-h-5 text-center">
              {sub_category_name}
            </h2>
          </div>
          <div className="object-cover object-center">
            <img src={image} className="h-[200px] w-full" />
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
