import { AiOutlineSend } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addMessage } from "../store/slices/chatSlice";
import { useState } from "react";

export default function LiveUserInput() {
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  const sendLiveMessage = (e) => {
    e.preventDefault();
    dispatch(
      addMessage({
        username: "Puneet Superstar",
        message,
        avatarUrl:
          "https://memes.co.in/Uploads/Media/Jun23/Tue20/942/9be49d38.jpg",
      })
    );
  };
  return (
    <>
      <form onSubmit={sendLiveMessage} className="flex h-full justify-center">
        <input
          type="text"
          className="flex-grow outline-none text-sm"
          placeholder="Enter your message"
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          onClick={sendLiveMessage}
          className="cursor-pointer"
        >
          <AiOutlineSend className="text-xl" />
        </button>
      </form>
    </>
  );
}
