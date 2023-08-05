import React from "react";
import { UserAuth } from "../context/AuthContext";

const Message = ({ messageValue }) => {
const currentUser =  UserAuth();


let confirmedDate;
let dateInMillis = messageValue.createdAt.seconds * 1000
let date = new Date(dateInMillis)
let myDate = date.toLocaleDateString()
let myTime = date.toLocaleTimeString()
myDate = myDate.replaceAll('/', '-')

confirmedDate =  myTime + " " + myDate

  return (
    <div className="Main-Data">
      <div className={`chat ${messageValue.uid === currentUser.currentUser.uid ? "chat-end" : "chat-start"} `}>
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src={messageValue.avatar} alt=""/>
          </div>
        </div>

        <div className="chat-header font-bold">{messageValue.name}</div>

        <div className="chat-bubble">{messageValue.text}</div>

        <div className="chat-footer opacity-50">{confirmedDate}</div>
      </div>
    </div>
  );
};

export default Message;
