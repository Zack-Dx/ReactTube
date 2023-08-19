import { useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addMessage } from "../../store/slices/chatSlice";

export default function LiveUserInput() {
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const isDisabled = message === "";

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
    setMessage("");
  };

  return (
    <>
      <form onSubmit={sendLiveMessage} className="flex h-full justify-center">
        <input
          type="text"
          className="flex-grow outline-none text-sm"
          placeholder="Enter your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          disabled={isDisabled}
          onClick={sendLiveMessage}
          className="cursor-pointer"
        >
          <AiOutlineSend
            className={`text-xl ${isDisabled ? "text-gray-300" : null}`}
          />
        </button>
      </form>
    </>
  );
}
