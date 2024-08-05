import { NavLink } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
const Sidebar = () => {
  return (
    <div className={"w-full ml-2 md:w-1/4 bg-blue-800 h-screen p-4 flex flex-col"}>

     <div className="flex items-center mb-4 text-white">
     <img
          src="https://via.placeholder.com/40" 
          alt="Ali Hassan"
          className="w-10 h-10 rounded-full mr-2"
        />Ali Hassan</div>
      <div className="mb-6 relative">
        <input
          type="text"
          placeholder="Search chats"
          className="p-2 pl-10 w-full rounded-lg bg-blue-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
          <FaSearch
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          size={16} // Adjust size as needed
        />
      </div>
      <ul className="flex flex-col space-y-3">
        {[
          { name: 'Emily', path: '/chat/emily' },
          { name: 'Liam', path: '/chat/liam' },
          { name: 'Sophia', path: '/chat/sophia' },
          { name: 'Max', path: '/chat/max' }
        ].map(({ name, path }) => (
          <li key={name} className="flex items-center space-x-2">
            <NavLink
              to={path}
              className={({ isActive }) =>
                `w-full flex items-center p-2 rounded ${isActive ? 'bg-blue-600' : 'hover:bg-blue-700'} text-white`
              }
            >
              <img
                src={`https://via.placeholder.com/40`} 
                alt={name}
                className="w-10 h-10 rounded-full mr-2"
              />
              <span>{name}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
