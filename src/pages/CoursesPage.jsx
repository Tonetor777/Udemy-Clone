import React from 'react';
import { useParams } from 'react-router-dom';
import Course from '../components/Course';
import { useCoursesContext } from '../context/courses_context';

const CoursesPage = () => {
  const { category } = useParams();
  const { courses } = useCoursesContext();

  return (
    <div className="container py-8">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {courses
          .filter((course) => course.category === category)
          .map((course) => (
            <Course key={course.id} {...course} />
          ))}
      </div>
    </div>
  );
};

export default CoursesPage;
