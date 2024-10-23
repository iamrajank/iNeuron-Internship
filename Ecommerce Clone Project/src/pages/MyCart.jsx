import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const MyCart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="pt-6 z-10 bg-slate-50 mt-20">
      {cart.length > 0 ? (
        <div className="w-3/4 m-auto  flex flex-row justify-between">
          <div className=" w-[48%] p-2 h-30%">
            {cart.map((item, index) => {
              return <CartItem key={item.id} item={item} itemIndex={index} />;
            })}
          </div>

          <div className="w-[48%]  p-4 flex flex-col justify-between">
            <div className="flex flex-col">
              <div className="font-bold text-green-800 uppercase">
                Your Cart
              </div>
              <div className="text-2xl text-green-900 font-semibold uppercase">
                Summary
              </div>
              <p className="font-semibold mt-2">
                Total Items :<span className="font-normal"> {cart.length}</span>
              </p>
            </div>

            <div>
              <p className="">
                Total Amount :{" "}
                <span className="font-semibold">${totalAmount}</span>{" "}
              </p>
              <Link to={"/checkout"}><button className="py-2 mt-2 bg-green-600 px-6 text-white font-semibold rounded-md"
            >
                CheckOut Now
              </button>
              </Link>
              
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center gap-3 items-center h-screen w-full">
          <h1 className="font-bold text-2xl">Cart Empty</h1>
          <Link to={"/"}>
            <button className="bg-green-600 py-2 px-4 rounded-md transition-all duration-200 hover:text-gray-200 hover:bg-green-800 font-semibold">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default MyCart;
