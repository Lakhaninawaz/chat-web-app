const ChatWindow = () => {

  return (
    <div className="w-full h-full bg-black rounded-xl p-4 flex flex-col">
      <div className="text-white text-xl font-bold mb-4">Ali Hassan</div>
      <div className="flex-1 overflow-y-auto">
        <div>Chat messages here...</div>
      </div>
      <div className="flex items-center mt-4">
        <input type="text" className="p-2 w-full rounded-xl bg-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 px-3" placeholder="Type a message" />
        <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-5 py-2 rounded-lg ml-2">Send</button>
      </div>
    </div>
  );
}

export default ChatWindow;
