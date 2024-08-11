import { NavLink, useLocation } from 'react-router-dom';
import { HomeIcon, CogIcon, UserCircleIcon } from '@heroicons/react/outline';
import { useState } from 'react';

const OptionBar = () => {

  const [showDropdown, setShowDropdown] = useState(false)

  const location = useLocation();
  return (
    <div className="w-20 bg-black text-white h-screen rounded-xl p-4 flex flex-col items-center justify-center relative">
      <div className="img_icon w-full flex flex-col items-center justify-center top-5 absolute">
        <img
          src={`https://via.placeholder.com/40`}
          alt={"name"}
          className="w-10 h-10 rounded-full"
        />
        <div className="dropdown inline-block relative">
          <button className="text-white font-semibold rounded inline-flex flex-wrap items-center" onClick={() => setShowDropdown(!showDropdown)}>
            <span className="px-1 mr-1">nawaz</span>
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
          </button>
          <ul className={`dropdown-menu ${showDropdown ? 'absolute' : 'hidden'} bg-gray-950 text-white pt-1`}>
            <li className=""><a className="rounded-t  hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Profile</a></li>
            <li className=""><a className=" hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Setting</a></li>
            <li className=""><a className="rounded-b hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Other</a></li>
          </ul>
        </div>
      </div>
      <ul className="space-y-4">
        <li>
          <NavLink to="/home" className={`text-white flex items-center justify-center [&.active]:bg-gradient-to-r from-pink-500 to-purple-500 [&.active]:text-white rounded-full p-2 ${location.pathname === '/home' ? 'active' : ''}`}>
            <HomeIcon className="h-6 w-6" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/settings" className={`text-white flex items-center justify-center [&.active]:bg-gradient-to-r from-pink-500 to-purple-500 [&.active]:text-white rounded-full p-2 ${location.pathname === '/settings' ? 'active' : ''}`}>
            <CogIcon className="h-6 w-6" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/account" className={`text-white flex items-center justify-center [&.active]:bg-gradient-to-r from-pink-500 to-purple-500 [&.active]:text-white rounded-full p-2 ${location.pathname === '/account' ? 'active' : ''}`}>
            <UserCircleIcon className="h-6 w-6" />
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default OptionBar;
