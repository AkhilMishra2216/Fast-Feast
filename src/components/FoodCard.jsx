import React from "react";
import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/CartSlice";

const FoodCard = ({ id, name, price, desc, img, rating, handleToast }) => {
  const dispatch = useDispatch();

  return (
    <div className="font-semibold w-[250px] bg-white p-5 rounded-xl flex flex-col gap-3 shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100">
      <img
        src={img}
        alt={name}
        className="w-auto h-[130px] object-contain rounded-md hover:scale-110 transition-transform duration-500 ease-in-out cursor-pointer"
      />

      <div className="text-sm flex justify-between text-gray-800">
        <h2>{name}</h2>
        <span className="text-green-600 font-bold">₹{price}</span>
      </div>

      <p className="text-sm text-gray-500 font-normal">
        {desc.slice(0, 50)}...
      </p>

      <div className="flex justify-between items-center mt-auto">
        <span className="flex items-center text-yellow-500 text-sm">
          <AiFillStar className="mr-1" /> {rating}
        </span>
        <button
          onClick={() => {
            dispatch(
              addToCart({ id, name, price, rating, price, img, qty: 1 })
            );
            handleToast(name);
          }}
          className="px-3 py-1 bg-green-500 hover:bg-green-600 text-white rounded-lg text-xs tracking-wide transition-all duration-200"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
