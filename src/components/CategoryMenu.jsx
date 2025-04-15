import React, { useEffect, useState } from "react";
import FoodData from "../data/FoodData";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/slices/CategorySlice";

const CategoryMenu = () => {
  const [categories, setCategories] = useState([]);

  const listUniqueCategories = () => {
    const uniqueCategories = [
      ...new Set(FoodData.map((food) => food.category)),
    ];
    setCategories(uniqueCategories);
    console.log(uniqueCategories);
  };

  useEffect(() => {
    listUniqueCategories();
  }, []);

  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.category.category);

  return (

    <div className="ml-6 p-5 bg-gradient-to-r from-green-300 to-blue-200 rounded-lg shadow-lg">
      <h3 className="text-3xl font-semibold text-white mb-5 hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-green-700 hover:to-blue-200 transition-all duration-300 ease-in-out">
        Find the Best Food
      </h3>
      <div className="flex gap-4 overflow-x-scroll scroll-smooth lg:overflow-x-hidden">
        <button
          onClick={() => dispatch(setCategory("All"))}
          className={`px-6 py-3 bg-gray-100 text-gray-800 font-semibold rounded-lg hover:bg-green-600 hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md ${
            selectedCategory === "All" && "bg-green-600 text-white"
          }`}
        >
          All
        </button>
        {categories.map((category, index) => {
          return (
            <button
              onClick={() => dispatch(setCategory(category))}
              key={index}
              className={`px-6 py-3 bg-gray-100 text-gray-800 font-semibold rounded-lg hover:bg-green-600 hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md ${
                selectedCategory === category && "bg-green-600 text-white"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>

  );
};

export default CategoryMenu;
