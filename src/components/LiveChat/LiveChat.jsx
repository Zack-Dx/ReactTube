import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../../store/slices/chatSlice";
import { randomDataGenerator } from "../../utils/helper";
import { randomNameData } from "../../data/constants";
import { randomMessagesData } from "../../data/constants";
import LiveUserInput from "./LiveUserInput";
import LiveChatMessage from "./LiveChatMessage";

export default function LiveChat() {
  const messages = useSelector((store) => store.liveChat.messages);
  const dispatch = useDispatch();

  // useEffect (Handling the debouncing for Live Chat)
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(
        addMessage({
          username: randomDataGenerator(randomNameData),
          message: randomDataGenerator(randomMessagesData),
          avatarUrl: "https://static.thenounproject.com/png/4035889-200.png",
        })
      );
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="lg:col-span-4 col-span-12 rounded-lg h-[500px] border">
      <div className="py-2 border-b my-1 ">
        <h3 className="text-center">Live Chat</h3>
      </div>

      <div className="h-[400px] overflow-y-auto scrollbar-hide flex flex-col-reverse">
        {messages?.map((message, index) => (
          <LiveChatMessage key={index} {...message} />
        ))}
      </div>
      <div className="h-[50px] px-4 border-t">
        <LiveUserInput />
      </div>
    </section>
  );
}
