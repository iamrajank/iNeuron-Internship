import { useState } from "react";
import { useEffect } from "react";
import Product from "../components/Product";
import Spinner from "../components/Spinner";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getData() {
    setLoading(true);
    try {
      const url = await fetch(API_URL);
      const output = await url.json();
      setItems(output);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="mt-20 z-10">
      {loading ? (
        <div className=" flex justify-center items-center h-screen w-full">
          <Spinner />
        </div>
      ) : items.length > 0 ? (
        <div className="bg-slate-50 w-full h-full">
          <div className="w-3/4 sm:flex-col lg:flex-row md:flex-row flex-wrap  m-auto pt-10 gap-3 flex  justify-between">
            {items.map((item) => {
              return <Product key={item.id} item={item} />;
            })}
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <p>No Data Found</p>
        </div>
      )}
    </div>
  );
};

export default Home;
