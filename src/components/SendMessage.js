import { useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { UserAuth } from "../context/AuthContext";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../Firebase";

const SendMessage = () => {
  const [value, setValue] = useState("");
  const {currentUser} = UserAuth();

  const sendMeassageHandler = async (e) => {
    e.preventDefault();
    if(value.trim() === '') {
      alert("Enter a valid message");
      return;
    }

    try {
      const {uid, displayName, photoURL } = currentUser;
      await addDoc(collection(db, "messages"),{
        text: value,
        name: displayName,
        avatar: photoURL,
        createdAt: new Date(),
        createdTime: Timestamp.fromDate(new Date()),
        uid
      })
    } catch (error) {
      console.log(error);
    }

    setValue("");
  };

  return (
    <div className="sendMsg fixed bottom-0 w-full py-10">
      <form onSubmit={sendMeassageHandler} className="containerWrapper flex">
        <input
          className="input w-full focus:outline-none"
          onChange={(e) => setValue(e.target.value)}
          type="text"
          value={value}
          placeholder="Message...."
        />
        <button className="" type="submit">
          <AiOutlineSend />
        </button>
      </form>
    </div>
  );
};

export default SendMessage;
