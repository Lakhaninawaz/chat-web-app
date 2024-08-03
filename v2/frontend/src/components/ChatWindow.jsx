const ChatWindow = () => {

  return (
    <div className="w-full h-full bg-primary-color rounded-xl p-4 flex flex-col">
      <div className="text-white text-xl font-bold mb-4">Ali Hassan</div>
      <div className="flex-1 overflow-y-auto">
        <div>Chat messages here...</div>
      </div>
      <div className="flex items-center mt-4">
        <input type="text" className="p-2 w-full rounded-xl" placeholder="Type a message" />
        <button className="bg-blue-600 text-white p-2 rounded-lg ml-2">Send</button>
      </div>
    </div>
  );
}

export default ChatWindow;
