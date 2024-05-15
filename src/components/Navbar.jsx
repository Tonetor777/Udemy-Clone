import React , {useContext} from 'react';
import { Link } from 'react-router-dom';
import { MdMenu, MdShoppingCart } from 'react-icons/md';
import { useSidebarContext } from '../context/sidebar_context';
import { useCartContext } from '../context/cart_context';
import { AuthContext } from './AuthContext';
const Navbar = () => {
  const { total_items } = useCartContext();
  const { openSidebar } = useSidebarContext();
  const { isAuthenticated, user, logout } = useContext(AuthContext);
  console.log(user)

  return (
    <nav className="bg-white shadow-md h-20 flex items-center">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-semibold text-gray-800 hover:text-orange-500">
          <span className="text-orange-500">U</span>demy
        </Link>

        <div className="flex items-center">
        <Link to="/signup" className="text-lg    mr-8   px-5 py-3 hover:text-gray-300">
           Teach on Udemy
        </Link>
            <Link to="/InstProfile " className="text-lg    mr-8   px-5 py-3 hover:text-gray-300">
            My Profile
         </Link>
        <Link to="/cart" className="relative mr-8 text-4xl text-gray-800 hover:text-orange-500">
            <MdShoppingCart />
            <span className="item-count-badge absolute top-0 right-0 bg-orange-500 text-white text-xs font-semibold w-4 h-4 flex items-center justify-center rounded-full">{total_items}</span>
          </Link>

          {
            isAuthenticated ? (
              <>
              <span className='text-2xl mr-4'>Welcome, {user.first_name} {user.last_name}</span>
                  <button onClick={logout} className="text-lg font-bold mr-8 border px-5 py-3  text-white  bg-black focus:outline-none hover:bg-white">
           Logout
                  </button>
            </>
            ) : 
            (
              <>
                  <Link to="/login" className="text-lg font-bold  mr-8 border px-5 py-3 hover:text-white hover:bg-black focus:outline-none">
           Login
        </Link>

        <Link to="/signup" className="text-lg font-bold mr-8 border px-5 py-3  text-white  bg-black focus:outline-none hover:bg-white">
           Sign Up
        </Link>
              </>
            )
          }
          

          <button type="button" className="sidebar-open-btn transition-opacity duration-300 ease-in-out hover:opacity-70" onClick={() => openSidebar()}>
            <MdMenu className="text-3xl text-gray-800" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
