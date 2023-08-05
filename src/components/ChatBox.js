import { useEffect, useRef, useState } from "react";
import Message from "./Message";
import { collection, query, onSnapshot, orderBy, limit } from "firebase/firestore";
import { db } from "../Firebase";
import { UserAuth } from "../context/AuthContext";

const ChatBox = () => {

  const messagesEndRef = useRef();
  const [messages, setMessages] = useState([]);

  const {currentUser} = UserAuth();

  const scrollToBottom= () =>{
    messagesEndRef.current.scrollIntoView({ behavior : "smooth"})
  };

  useEffect((scrollToBottom),[messages])

  useEffect(()=>{
    const q = query(
      collection(db, "messages"),
      orderBy("createdAt"),
      limit(50),
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({...doc.data(), id: doc.id});
      });  
      setMessages(messages)
    });

    return ()=>unsubscribe;
  },[])

  return (
    <div className={`containerWrapper pb-44 ${currentUser ? 'chatShow' : ''}`}>
      {messages.map((message) => (
        <Message key={message.id} messageValue={message} />
      ))}
      <div ref={messagesEndRef}></div>
    </div>
  );
};

export default ChatBox;
