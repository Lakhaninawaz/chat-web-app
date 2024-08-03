
import { NavLink } from 'react-router-dom';

const ChatList = () => {
  return (
    <div className="w-1/4 bg-blue-800 h-screen p-4">
      <div className="text-white">Messages</div>
      <div className="mt-6">
        <input type="text" placeholder="Search chats" className="p-2 w-full rounded" />
      </div>
      <ul className="mt-6">
        <li><NavLink to="/chat/emily" className="text-white">Emily</NavLink></li>
        <li><NavLink to="/chat/liam" className="text-white">Liam</NavLink></li>
        <li><NavLink to="/chat/sophia" className="text-white">Sophia</NavLink></li>
        <li><NavLink to="/chat/max" className="text-white">Max</NavLink></li>
      </ul>
    </div>
  );
}

export default ChatList;
