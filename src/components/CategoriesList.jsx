import React from 'react';
import { categories_images } from '../utils/images.jsx';
import Category from "./Category";
import { useCoursesContext } from '../context/courses_context';

const CategoriesList = () => {
  const { categories } = useCoursesContext();
  
  return (
    <div className='bg-gray-100 py-8'>
      <div className='container'>
        <div className='mb-8'>
          <h2 className='text-4xl font-bold'>Top Categories</h2>
        </div>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 text-2xl font-bold'>
          {categories.map((category, idx) => (
            <Category image={categories_images[idx]} category={category} key={idx} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default CategoriesList;
