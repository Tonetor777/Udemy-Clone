import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
const Side = () => {

        return (
          <nav className="fixed left-0 top-20 h-full bg-orange-500 p-10">
            <ul className="flex flex-col gap-4">
              <li>
                <Link to=" " className="text-white">Dashboard</Link>
              </li>
              <li>
                <Link to=" " className="text-white">Profile</Link>
              </li>
              <li>
                <Link to=" " className="text-white">Settings</Link>
              </li>
            </ul>
          </nav>
        );
      }

export default Side