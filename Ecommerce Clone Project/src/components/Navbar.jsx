import { HiShoppingBag } from "react-icons/hi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { cart } = useSelector((state) => state);

  return (
    <div className="bg-gray-900 z-20 text-white w-full h-20 flex fixed top-0">
      <div className=" w-3/4 m-auto flex justify-between items-center">
        <div>
          <NavLink to={"/"} className="flex items-center gap-2 relative">
            <p className="text-xl uppercase underline-offset-2 underline">
              <span className="text-3xl text-green-400">D</span>ukaan
            </p>
            <HiShoppingBag className="text-5xl text-green-500" />
            <span className="absolute -right-2 border-green-500  -bottom-2 border-b-4 rounded-2xl p-8"></span>
          </NavLink>
        </div>
        <div className="flex items-center gap-3">
          <NavLink to={"/"}>
            {" "}
            <p className="text-xl">Home</p>
          </NavLink>
          <NavLink to={"/mycart"}>
            <div className="relative">
              <AiOutlineShoppingCart className="text-3xl" />
              {cart.length > 0 && (
                <span
                  className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex 
                    justify-center items-center animate-bounce rounded-full text-white"
                >
                  {cart.length}
                </span>
              )}
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
