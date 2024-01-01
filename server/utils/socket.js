import { io } from "../config/socket.js";

export function sendNewMessage(data) {
    io.emit("new-message", data);
}
