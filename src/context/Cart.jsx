import React, { useContext } from "react";
import { CartContext } from "../CartContext";

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="p-6 mt-20">
      <h2 className="text-xl font-semibold">Cart</h2>
      {cart.length === 0 && <p>No items in cart</p>}
      {cart.map(item => (
        <div key={item.id} className="flex justify-between items-center py-2">
          <span>{item.title} (x{item.qty})</span>
          <button
            onClick={() => removeFromCart(item.id)}
            className="bg-red-500 text-white px-3 py-1 rounded"
          >
            Remove
          </button>
        </div>
      ))}
      <h3 className="mt-4 font-bold">Total: ${total.toFixed(2)}</h3>
    </div>
  );
};

export default Cart;
