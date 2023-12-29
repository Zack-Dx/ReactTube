import { useSelector } from "react-redux";

import LiveUserInput from "./LiveUserInput";
import LiveChatMessage from "./LiveChatMessage";

export default function LiveChat() {
  const messages = useSelector((store) => store.liveChat.messages);

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
