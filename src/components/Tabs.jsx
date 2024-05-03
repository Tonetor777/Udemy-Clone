import React, { useState } from 'react';
import Course from './Course';
import '../App.css';
import { PYTHON, WEB_DEVELOPMENT, DATA_SCIENCE, AWS, DESIGN, MARKETING } from '../utils/constants';
import courses from '../utils/data';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(PYTHON);

  const tabHandler = (category) => {
    setActiveTab(category);
  };

  return (
    <div className="mt-4">
      <div className="lg:flex lg:flex-row sm:flex sm:flex-col  text-md">
        <button className={`tab-btn border border-solid border-gray-400 px-3 py-1 m-2  hover:bg-black hover:text-white ${activeTab === PYTHON ? 'active' : ''}`} onClick={() => tabHandler(PYTHON)}>Python</button>
        <button className={`tab-btn border border-solid border-gray-400 p-2 m-2   hover:bg-black hover:text-white ${activeTab === WEB_DEVELOPMENT ? 'active' : ''}`} onClick={() => tabHandler(WEB_DEVELOPMENT)}>Web Development</button>
        <button className={`tab-btn border border-solid border-gray-400 p-2 m-2  hover:bg-black hover:text-white ${activeTab === DATA_SCIENCE ? 'active' : ''}`} onClick={() => tabHandler(DATA_SCIENCE)}>Data Science</button>
        <button className={`tab-btn border border-solid border-gray-400 p-2 m-2  hover:bg-black hover:text-white ${activeTab === AWS ? 'active' : ''}`} onClick={() => tabHandler(AWS)}>AWS Certification</button>
        <button className={`tab-btn border border-solid border-gray-400 p-2 m-2  hover:bg-black hover:text-white ${activeTab === DESIGN ? 'active' : ''}`} onClick={() => tabHandler(DESIGN)}>Design</button>
        <button className={`tab-btn border border-solid border-gray-400 p-2 m-2  hover:bg-black hover:text-white ${activeTab === MARKETING ? 'active' : ''}`} onClick={() => tabHandler(MARKETING)}>Marketing</button>
      </div>

      <div className="mt-4 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {courses.filter(course => course.category === activeTab).map(course => (
          <Course key={course.id} {...course} />
        ))}
      </div>
    </div>
  );
};

export default Tabs;
