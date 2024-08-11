import { NavLink } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
const Sidebar = () => {
  return (
    <div className={"w-full ml-2 md:w-[22%]  bg-gray-900 h-screen p-4 flex flex-col rounded-l-xl"}>

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
          className="p-2 pl-10 w-full rounded-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
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
          <li key={name} className="flex items-center justify-between">
            <NavLink
              to={path}
              className={({ isActive }) =>
                `w-full flex items-center p-2 rounded ${isActive ? 'bg-gradient-to-r from-pink-500 to-purple-500' : 'hover:bg-gradient-to-r from-pink-500 to-purple-500'} text-white`
              }
            >
              <img
                src={`https://via.placeholder.com/40`} 
                alt={name}
                className="w-10 h-10 rounded-full mr-2"
              />
              <div className="name_chat">
              <span>{name}</span>
              <p>this message what sent/receive</p>
              </div>
              <div className="num flex items-center justify-center">
              <p className='text-sm bg-pink-600 text-white rounded-full px-2 py-1'>2</p>
            </div>
            </NavLink>
            
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
