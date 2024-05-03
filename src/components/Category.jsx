import React from 'react';
import { Link } from "react-router-dom";

const Category = ({ image, category }) => {
  return (
    <Link to={`/category/${category}`}>
      <div className='flex flex-col bg-blue-100 p-5 border border-transparent transition hover:border-purple-500'>
        <div className='mb-4'>
          <img src={image} alt={category} className='max-w-110px' />
        </div>
        <div>
          <h6 className='text-base'>{category}</h6>
        </div>
      </div>
    </Link>
  )
}

export default Category;
