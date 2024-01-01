import { useCallback, useRef, useEffect, useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { setIncomingVideoMessage } from "../../store/slices/chatSlice";
import socket from "../../socket/socket";

export default function LiveUserInput() {
    const MAX_MESSAGE_LENGTH = 100;
    const videoId = useSelector((store) => store.liveChat.activeVideo.videoId);
    const [message, setMessage] = useState("");
    const inputRef = useRef(null);
    const remainingCharacters = MAX_MESSAGE_LENGTH - message.length;
    const dispatch = useDispatch();
    const isDisabled = message === "";

    // Function to handle the Live user message
    const sendLiveMessage = (event) => {
        event.preventDefault();
        socket.emit("new-message", {
            videoId,
            message: {
                username: "User",
                message: inputRef.current.value,
                avatarUrl:
                    "https://static.thenounproject.com/png/4035889-200.png",
            },
        });
        setMessage("");
    };

    const handleNewMessage = useCallback(
        (data) => {
            dispatch(setIncomingVideoMessage(data));
        },
        [dispatch]
    );

    useEffect(() => {
        socket.on("new-message", handleNewMessage);

        return () => {
            socket.off("new-message", handleNewMessage);
        };
    }, [handleNewMessage]);

    return (
        <>
            <form
                onSubmit={sendLiveMessage}
                className="flex h-full justify-center items-center"
            >
                <input
                    ref={inputRef}
                    type="text"
                    className="flex-grow outline-none text-sm p-2"
                    placeholder="Enter your message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    maxLength={MAX_MESSAGE_LENGTH}
                />
                <div className="text-xs text-gray-500">
                    {remainingCharacters}/{MAX_MESSAGE_LENGTH}
                </div>
                <button
                    type="submit"
                    disabled={isDisabled}
                    className="cursor-pointer"
                >
                    <AiOutlineSend
                        className={`text-4xl px-2  ${
                            isDisabled ? "text-gray-300" : null
                        }`}
                    />
                </button>
            </form>
        </>
    );
}
