import { useEffect } from "react";

import LiveUserInput from "./LiveUserInput";
import LiveChatMessage from "./LiveChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../../store/slices/chatSlice";
import { randomDataGenerator } from "../../utils/helper";
import { randomNameData } from "../../data/constants";
import { randomMessagesData } from "../../data/constants";

export default function LiveChat() {
  const messages = useSelector((store) => store.liveChat.messages);
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(
        addMessage({
          username: randomDataGenerator(randomNameData),
          message: randomDataGenerator(randomMessagesData),
          avatarUrl:
            "https://yt4.ggpht.com/5n8eUJFmJqXK1pKuecCd9mjv10sUvtYtdIpdRXqxkR-93xeqgPyjXCkvDvTRpoWJEfh1tYcOUUw=s32-c-k-c0x00ffffff-no-rj",
        })
      );
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="md:col-span-4 rounded-lg mx-5 h-[500px] border">
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
