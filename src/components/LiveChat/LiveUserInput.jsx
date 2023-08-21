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
        username: "User",
        message,
        avatarUrl: "https://static.thenounproject.com/png/4035889-200.png",
      })
    );
    setMessage("");
  };

  return (
    <>
      <form onSubmit={sendLiveMessage} className="flex h-full justify-center">
        <input
          type="text"
          className="flex-grow outline-none text-sm p-2"
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
