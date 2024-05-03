import React from 'react';
import { MdClose } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useSidebarContext } from '../context/sidebar_context';
import { useCoursesContext } from '../context/courses_context';

const Sidebar = () => {
  const { categories } = useCoursesContext();
  const { closeSidebar, isSidebarOpen } = useSidebarContext();

  return (
    <div className={`fixed top-0 right-0 w-72 bg-white shadow-md h-full transform ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'} transition-all duration-300 z-10`}>
      <button type="button" className="absolute top-4 right-4 border-2 border-black rounded-full w-8 h-8 flex items-center justify-center hover:bg-black hover:text-white" onClick={() => closeSidebar()}>
        <MdClose />
      </button>
      <div className="px-6 py-8">
        <h6 className="text-xl font-semibold mb-6">Top Categories</h6>
        <ul>
          {categories.map((category, idx) => (
            <li key={idx} className="text-lg font-medium mb-4 hover:underline">
              <Link to={`/category/${category}`}>{category.toUpperCase()}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
