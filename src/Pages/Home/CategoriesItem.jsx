import PropTypes from "prop-types";
const CategoriesItem = ({ item }) => {
  const { image, sub_category_name } = item;
  return (
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
  );
};
CategoriesItem.propTypes = {
  item: PropTypes.object,
};
export default CategoriesItem;
