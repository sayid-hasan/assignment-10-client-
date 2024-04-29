import { Helmet } from "react-helmet";

import { Link, useLoaderData } from "react-router-dom";

const ViewDetails = () => {
  const craftItem = useLoaderData();

  const {
    user_email,
    item_name,
    user_name,
    image,
    sub_category_name,
    price,
    rating,
    customzation,
    processing_time,
    short_description,
    stock_status,
  } = craftItem;
  return (
    <div>
      <Helmet>
        <title>Craft Item Details</title>
      </Helmet>

      {/* content */}
      <div data-aos="fade-up" className="font-roboto mt-14 mb-12">
        <h2 className="text-center text-[#05a081] font-jacquard font-bold text-2xl md:text-4xl mb-5 ">
          Craft Item Details
        </h2>
        <div className="md:p-6 px-2 gap-7   flex md:flex-row-reverse flex-col min-h-screen md:items-center ">
          {/* 1 */}
          <div className=" w-full md:w-1/2 flex justify-center ">
            <img
              src={image}
              className="object-cover object-center w-full h-auto md:h-[550px] rounded-lg"
            />

            {/* location
            <div className="  flex justify-center items-center gap-4">
              <span className="text-[#05a081] text-3xl">
                <FaMapLocation></FaMapLocation>
              </span>
              <span className="text-xl font-bold tracking-widest text-black">
                {user_name}
              </span>
            </div> */}
          </div>
          {/* 2 */}
          <div className="flex-grow">
            <h1 className="text-2xl md:text-3xl text-[#05a081] font-bold">
              {item_name}
            </h1>
            <span className="block text-xs font-medium tracking-widest uppercase text-violet-400 mt-5">
              {sub_category_name}
            </span>

            <p className="py-6 font-bitter leading-9">{short_description}</p>
            {/* price and Rating */}
            <div>
              <div className="flex justify-between  mb-4 items-center font-bold text-black text-opacity-70  ">
                <div>
                  <span className="text-[#05a081] font-bitter text-xl font-bold">
                    Price :{" "}
                  </span>
                  <div className="md:text-xl text-base font-bold flex items-start gap-2">
                    {price}
                    <span className="text-[#05a081]">$</span>
                  </div>
                </div>
                <div>
                  <span className="text-[#05a081] font-bitter text-xl font-bold">
                    Rating :{" "}
                  </span>
                  <div className="md:text-xl text-base font-bold flex items-start gap-2">
                    {rating}
                    <div className="rating rating-sm md:rating-md">
                      {" "}
                      <input
                        type="radio"
                        name="rating-7"
                        className="mask mask-star-2 bg-orange-400"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Customization and processing time */}
            <div>
              <div className="flex justify-between  mb-4 items-center font-bold text-black text-opacity-70 ">
                <div>
                  <span className="text-[#05a081] font-bitter text-xl font-bold">
                    Customization :{" "}
                  </span>
                  <div className="md:text-xl text-base font-bold flex items-start gap-2">
                    {customzation || "No"}
                  </div>
                </div>
                <div>
                  <span className="text-[#05a081] font-bitter text-xl font-bold">
                    Processing Time :{" "}
                  </span>
                  <div className="md:text-xl text-base font-bold flex items-start gap-2">
                    {processing_time}
                  </div>
                </div>
              </div>
            </div>
            {/* User Name and Email */}
            <div>
              <div className="flex justify-between  mb-4 items-center font-bold text-black text-opacity-70 ">
                <div>
                  <span className="text-[#05a081] font-bitter text-xl font-bold">
                    Art Presented By :{" "}
                  </span>
                  <div className="md:text-xl text-base font-bold flex items-start gap-2">
                    {user_name}
                  </div>
                </div>
                <div>
                  <span className="text-[#05a081] block text-right font-bitter text-xl font-bold">
                    Artist Email:{" "}
                  </span>
                  <div className="md:text-xl text-base font-bold ">
                    {user_email}
                  </div>
                </div>
              </div>
            </div>
            {/* stock status */}
            <div
              className=" my-3
             w-full rounded-lg  flex justify-center px-8 py-3 font-semibold  bg-[#05A081] text-white  "
            >
              {stock_status}
            </div>
            {/* back to homepage and saved to Bookmarks */}
            <div className="flex justify-between">
              <Link
                to="/"
                className="w-full flex justify-center px-8 py-3 font-semibold rounded bg-[#05A081] text-white"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
