import { NavLink } from 'react-router-dom';
import { HomeIcon, CogIcon, UserCircleIcon } from '@heroicons/react/outline';

const OptionBar = () => {
  return (
    <div className="w-16 bg-secondary-color h-screen rounded-xl ml-2 p-4 flex flex-col items-center justify-center">
      <ul className="space-y-4">
        <li>
          <NavLink to="/home" className="text-white flex items-center justify-center">
            <HomeIcon className="h-6 w-6" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/settings" className="text-white flex items-center justify-center">
            <CogIcon className="h-6 w-6" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/account" className="text-white flex items-center justify-center">
            <UserCircleIcon className="h-6 w-6" />
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default OptionBar;
