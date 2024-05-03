import React from 'react';
import { useCartContext } from '../context/cart_context';
import CartItem from '../components/CartItem';
import { MdClear } from 'react-icons/md';

const CartPage = () => {
  const { cart: cartItems, total_items, total_amount, clearCart } = useCartContext();

  if (cartItems.length < 1) {
    return (
      <div className="container py-8">
        <div className="text-center font-semibold">No items found in the cart.</div>
      </div>
    );
  }

  return (
    <div className="container py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Cart items */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <div className="font-semibold text-lg">{total_items} Course in Cart</div>
            <button className="flex items-center text-pink text-lg font-semibold" onClick={clearCart}>
              <MdClear className="mr-1" />
              Clear All
            </button>
          </div>
          <div className="grid grid-cols-1 gap-6">
            {cartItems.map((cartItem) => (
              <CartItem key={cartItem.courseID} cartItem={cartItem} />
            ))}
          </div>
        </div>
        {/* Cart summary */}
        <div>
          <div className="bg-gray-100 p-6">
            <div className="font-semibold text-lg mb-4">Total:</div>
            <div className="font-bold text-2xl">${total_amount.toFixed(2)}</div>
            <button className="bg-purple-500 text-white px-8 py-2 mt-4 font-semibold hover:bg-purple-600 transition duration-300">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
