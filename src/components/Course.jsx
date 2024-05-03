import React from 'react';
import { Link } from 'react-router-dom';
import StarRating from '../components/StarRating';
import { useCartContext } from '../context/cart_context';

const Course = (props) => {
  const { id, image, course_name, creator, actual_price, discounted_price, rating_count, rating_star, category } = props;
  const { addToCart } = useCartContext();

  return (
    <div className='border border-gray-200 rounded shadow-sm mb-5'>
      <div className='p-4'>
      <img src = {image} alt = {course_name} />
        <div className='flex justify-between items-center mb-2'>    
          <h5 className='text-lg font-semibold'>{course_name}</h5>
          <StarRating rating_star={rating_star} />
        </div>
        <p className='text-sm text-gray-500 mb-2'>{creator}</p>
        <div className='flex items-center text-sm text-orange-500 mb-2'>
          <span className='mr-1'>{rating_star}</span>
          <span>({rating_count})</span>
        </div>
        <div className='flex items-center'>
          <span className='text-lg font-semibold mr-2'>${discounted_price}</span>
          <span className='text-sm text-gray-500 line-through'>${actual_price}</span>
        </div>
      </div>
      <div className='flex justify-between p-4 border-t border-gray-200'>
        <Link to={`/courses/${id}`} className='text-sm py-2 px-4 rounded border border-gray-300 hover:bg-gray-100'>
          See details
        </Link>
        <button onClick={() => addToCart(id, image, course_name, creator, discounted_price, category)} className='text-sm py-2 px-4 rounded bg-black text-white hover:bg-transparent hover:text-black border border-black'>
          Add to cart
        </button>
      </div>
    </div>
  )
}

export default Course;
