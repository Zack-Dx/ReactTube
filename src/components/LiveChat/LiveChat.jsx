import { useSelector } from "react-redux";
import LiveUserInput from "./LiveUserInput";
import LiveChatMessage from "./LiveChatMessage";

export default function LiveChat() {
    const messages = useSelector(
        (store) => store.liveChat.activeVideo.messages
    );

    return (
        <section className="lg:col-span-4 col-span-12 rounded-lg h-[500px] border">
            <div className="py-1 border-b my-1 ">
                <img
                    className="h-8 w-fit mx-auto"
                    src={
                        "https://media1.giphy.com/media/f5NQ7J743N8hVDM1Yu/giphy.gif?cid=6c09b9525hvuxnsuus6g45debonxgbvk0z8iw2i02phzmkpt&ep=v1_stickers_related&rid=giphy.gif&ct=s"
                    }
                    placeholder="live_image"
                />
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
