import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementQty,
  decrementQty,
} from "../redux/slices/CartSlice";
import { toast } from "react-hot-toast";

const ItemCard = ({ id, name, qty, price, img }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-3 shadow-lg rounded-xl p-4 mb-4 bg-white relative hover:shadow-xl transition-shadow duration-300">
      <MdDelete
        onClick={() => {
          dispatch(removeFromCart({ id, img, name, price, qty }));
          toast(`${name} Removed!`, { icon: "👋" });
        }}
        className="absolute right-4 top-4 text-gray-500 hover:text-red-500 cursor-pointer transition-colors duration-200 text-xl"
      />

      <img
        src={img}
        alt={name}
        className="w-[60px] h-[60px] object-contain rounded-md border border-gray-200"
      />

      <div className="flex flex-col justify-between flex-1">
        <h2 className="font-semibold text-gray-800 text-base">{name}</h2>
        <div className="flex items-center justify-between mt-2">
          <span className="text-green-600 font-bold text-sm">₹{price}</span>

          <div className="flex items-center gap-2">
            <AiOutlineMinus
              onClick={() =>
                qty > 1 ? dispatch(decrementQty({ id })) : null
              }
              className="text-gray-600 hover:bg-green-500 hover:text-white p-1 rounded-md border border-gray-300 transition-all cursor-pointer text-lg"
            />
            <span className="text-sm font-medium w-4 text-center">{qty}</span>
            <AiOutlinePlus
              onClick={() =>
                qty >= 1 ? dispatch(incrementQty({ id })) : null
              }
              className="text-gray-600 hover:bg-green-500 hover:text-white p-1 rounded-md border border-gray-300 transition-all cursor-pointer text-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
