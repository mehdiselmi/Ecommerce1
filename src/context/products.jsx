import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "./context/CartContext.jsx";


const Products = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="grid grid-cols-3 gap-6 mt-20 px-6">
      {products.map((product) => (
        <div key={product.id} className="border p-4 rounded shadow">
          <img
            src={product.image}
            alt={product.title}
            className="h-40 mx-auto"
          />
          <h2 className="text-lg font-semibold">{product.title}</h2>
          <p>${product.price}</p>
          <button
            onClick={() => addToCart(product)}
            className="bg-blue-600 text-white px-4 py-2 mt-2 rounded"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
