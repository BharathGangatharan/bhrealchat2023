import ChatBox from "../components/ChatBox";

import SendMessage from "../components/SendMessage";

const ChatRoom = () => {
  return (
    <div className="chatMain">
      <ChatBox />
      <SendMessage />
    </div>
  );
};

export default ChatRoom;
