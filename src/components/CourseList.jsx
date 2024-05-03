import React from 'react';
import Tabs from './Tabs';
import { useCoursesContext } from '../context/courses_context';

const CourseList = () => {
  const { courses } = useCoursesContext();

  return (
    <div className='py-10'>
      <div className='container'>
        <div className='mb-8'>
          <h2 className='text-4xl font-semibold'>A broad selection of courses</h2>
          <p className='text-2xl mt-2 text-gray-600'>Choose from 204,000 online video courses with new additions published every month</p>
        </div>

        <Tabs courses={courses} />
      </div>
    </div>
  )
}

export default CourseList;
