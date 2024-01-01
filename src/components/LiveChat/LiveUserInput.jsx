import { useCallback, useRef, useEffect, useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { setIncomingVideoMessage } from "../../store/slices/chatSlice";
import { ACTIONS } from "../../socket/actions";
import socket from "../../socket/socket";

const { NEW_MESSAGE } = ACTIONS;

export default function LiveUserInput() {
    const dispatch = useDispatch();
    const [message, setMessage] = useState("");
    const inputRef = useRef(null);
    const MAX_MESSAGE_LENGTH = 100;
    const isDisabled = message === "";
    const remainingCharacters = MAX_MESSAGE_LENGTH - message.length;
    const videoId = useSelector((store) => store.liveChat.activeVideo.videoId);

    // Function to handle the Live user message
    const handleSendLiveMessage = (event) => {
        event.preventDefault();
        socket.emit(NEW_MESSAGE, {
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

    const handleIncomingNewMessage = useCallback(
        (data) => {
            dispatch(setIncomingVideoMessage(data));
        },
        [dispatch]
    );

    useEffect(() => {
        socket.on(NEW_MESSAGE, handleIncomingNewMessage);

        return () => {
            socket.off(NEW_MESSAGE, handleIncomingNewMessage);
        };
    }, [handleIncomingNewMessage]);

    return (
        <>
            <form
                onSubmit={handleSendLiveMessage}
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
