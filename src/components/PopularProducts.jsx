import React from "react";
import { Link } from "react-router-dom";

const popularProducts = [
  {
    id: "3432",
    product_name: "Fender Stratocaster",
    product_thumbnail: process.env.PUBLIC_URL + "/guitar1.jpg",
    product_price: "$1499.00",
    product_stock: 341,
  },
  {
    id: "7633",
    product_name: "Gibson Les Paul",
    product_thumbnail: process.env.PUBLIC_URL + "/guitar2.png",
    product_price: "$399.00",
    product_stock: 24,
  },
  {
    id: "6534",
    product_name: "PRS Custom 24",
    product_thumbnail: process.env.PUBLIC_URL + "/guitar3.jpeg",
    product_price: "$899.00",
    product_stock: 56,
  },
  {
    id: "9234",
    product_name: "Ibanez RG",
    product_thumbnail: process.env.PUBLIC_URL + "/guitar4.webp",
    product_price: "$499.00",
    product_stock: 98,
  },
  {
    id: "4314",
    product_name: "Epiphone Les Paul Standard",
    product_thumbnail: process.env.PUBLIC_URL + "/guitar5.webp",
    product_price: "$699.00",
    product_stock: 0,
  },
  {
    id: "4342",
    product_name: "Jackson Soloist",
    product_thumbnail: process.env.PUBLIC_URL + "/guitar6.webp",
    product_price: "$399.00",
    product_stock: 453,
  },
];

const PopularProducts = () => {
  return (
    <div className=" bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 w-[320px]">
      <p className=" font-bold text-gray-700 ">Popular</p>
      <div className="mt-4 flex flex-col gap-3"></div>
      {popularProducts.map((product) => (
        <Link to="/" className="flex hover:no-underline">
          <div className="w-10 h-10 min-w-10 bg-gray-200 rounded-sm">
            <img
              className="w-full h-full object-cover rounded-sm overflow-hidden"
              src={product.product_thumbnail}
            />
          </div>
          <div className="ml-4 flex-1">
            <p className="text-sm text-gray-800">{product.product_name}</p>
            <span
              className={`text-sm font-meidum ${
                product.product_stock === 0
                  ? "text-orange-500"
                  : "text-green-500"
              }`}
            >
              {product.product_stock === 0
                ? "Out of stock"
                : product.product_stock + " in stock"}
            </span>
          </div>
          <div className="text-xs text-gray-400 pl-2">
            {product.product_price}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PopularProducts;
