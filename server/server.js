import { Config } from "./config/index.js";
import { ACTIONS } from "./constants/socket.actions.js";
import { io, server } from "./config/socket.js";
import { sendNewMessage } from "./utils/socket.js";

const { PORT } = Config;
const { NEW_MESSAGE, FETCH_MESSAGES } = ACTIONS;

const videoRooms = [];

io.on("connection", (socket) => {
    console.log("Client Connected");
    socket.on(NEW_MESSAGE, (data) => {
        const { videoId, message } = data;
        if (!videoId || !message) return;
        const existingVideoRoom = videoRooms.find(
            (videoRoom) => videoRoom.videoId === videoId
        );
        if (existingVideoRoom) {
            existingVideoRoom.messages.push(message);
            sendNewMessage(data);
            return;
        }
        videoRooms.push({
            videoId,
            messages: [message],
        });
        sendNewMessage(data);
    });

    socket.on(FETCH_MESSAGES, (videoId) => {
        const existingVideoRoom = videoRooms.find(
            (videoRoom) => videoRoom.videoId === videoId
        );
        if (existingVideoRoom) {
            if (existingVideoRoom.messages.length >= 15) {
                existingVideoRoom.messages.shift();
            }

            socket.emit(
                "received-video-messages",
                existingVideoRoom.messages.reverse()
            );
            return;
        }
        socket.emit("received-video-messages", []);
    });

    socket.on("error", (error) => {
        console.error(`Socket error: ${error.message}`);
    });

    socket.on("disconnect", () => {
        console.log("Client Disconnected");
    });
});

server.on("error", (error) => {
    console.error(`Server error: ${error.message}`);
});

server.listen(PORT, () => {
    console.log(`Server running at ${PORT}`);
});
