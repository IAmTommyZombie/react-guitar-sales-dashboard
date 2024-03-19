import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div>
      <p>Products coming soon!</p>
      <Link to="/" className="underline">
        go to dashboard
      </Link>
    </div>
  );
};

export default Products;
