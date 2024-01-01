import app from "../app.js";
import { Server } from "socket.io";
import { createServer } from "node:http";

const server = createServer(app);
const io = new Server(server, {
    cors: {
        origin: process.env.ALLOWED_ORIGIN,
    },
});

export { io, server };
