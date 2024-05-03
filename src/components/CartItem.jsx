import React from 'react';
import { FaTrashAlt } from "react-icons/fa";
import { useCartContext } from '../context/cart_context';

const CartItem = ({ cartItem }) => {
  const { removeFromCart } = useCartContext();

  return (
    <div className='grid border border-gray-200 p-4'>
      <div className='w-32 h-32 overflow-hidden'>
        <img src={cartItem.image} alt={cartItem.course_name} className='w-full h-full object-cover' />
      </div>
      <div className='ml-4'>
        <p className='font-semibold text-base'>{cartItem.course_name}</p>
        <span className='text-sm text-gray-400'>By {cartItem.creator}</span>
        <div className='font-semibold text-purple-500'>${cartItem.discounted_price}</div>
        <div className='bg-orange text-white text-xs py-1 px-2 inline-block uppercase font-semibold rounded'>{cartItem.category}</div>
        <br />
        <button type='button' className='text-sm text-dark font-medium mt-2 hover:text-purple-500' onClick={() => removeFromCart(cartItem.courseID)}>
          Remove <span className='ml-1'><FaTrashAlt /></span>
        </button>
      </div>
    </div>
  )
}

export default CartItem;
