import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
  const craftItem = useLoaderData();
  console.log(craftItem);
  return (
    <div>
      <h2>ViewDetails</h2>
    </div>
  );
};

export default ViewDetails;
