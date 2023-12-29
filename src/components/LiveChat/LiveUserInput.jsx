import { useEffect, useRef, useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { useDispatch } from "react-redux";
import socket from "../../socket/socket";
import { addMessage } from "../../store/slices/chatSlice";

export default function LiveUserInput() {
  const inputRef = useRef(null);
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const isDisabled = message === "";

  // Function to handle the Live user message
  const sendLiveMessage = (event) => {
    event.preventDefault();
    socket.emit("new-message", inputRef.current.value);
    setMessage("");
  };

  useEffect(() => {
    const handleNewMessage = (newMessage) => {
      dispatch(
        addMessage({
          username: "User",
          message: newMessage,
          avatarUrl: "https://static.thenounproject.com/png/4035889-200.png",
        })
      );
    };

    socket.on("new-message", handleNewMessage);
    () => {
      socket.off("new-message", handleNewMessage);
    };
  }, [dispatch]);
  return (
    <>
      <form onSubmit={sendLiveMessage} className="flex h-full justify-center">
        <input
          ref={inputRef}
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
