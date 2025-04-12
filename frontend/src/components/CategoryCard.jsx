import React from "react";

const CategoryCard = ({ categoryDetails }) => {
  const { categoryImage, categoryName, itemCount } = categoryDetails;
  return (
    <div className="flex flex-col justify-center items-center bg-sky-100 rounded-xl w-1/4 m-3 ">
      <img
        src={categoryImage}
        alt=""
        className="
              w-full h-3/5"
      />
      <div className="h-2/5 p-2">
        <h1>{categoryName}</h1>
        <p>{itemCount} items </p>
      </div>
    </div>
  );
};

export default CategoryCard;
