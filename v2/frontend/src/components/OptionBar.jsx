import { NavLink, useLocation } from 'react-router-dom';
import { HomeIcon, CogIcon, UserCircleIcon } from '@heroicons/react/outline';

const OptionBar = () => {
  
  const location = useLocation();
  return (
    <div className="w-16 bg-secondary-color h-screen rounded-xl ml-2 p-4 flex flex-col items-center justify-center">
      <ul className="space-y-4">
        <li>
          <NavLink to="/home" className={`text-white flex items-center justify-center [&.active]:bg-white [&.active]:text-black rounded-full p-2 ${location.pathname === '/home' ? 'active' : ''}`}>
            <HomeIcon className="h-6 w-6" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/settings" className={`text-white flex items-center justify-center [&.active]:bg-white [&.active]:text-black rounded-full p-2 ${location.pathname === '/settings' ? 'active' : ''}`}>
            <CogIcon className="h-6 w-6" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/account" className={`text-white flex items-center justify-center [&.active]:bg-white [&.active]:text-black rounded-full p-2 ${location.pathname === '/account' ? 'active' : ''}`}>
            <UserCircleIcon className="h-6 w-6" />
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default OptionBar;
