import { io } from "socket.io-client";
const SOCKET_SERVER_URL = import.meta.env.VITE_SOCKET_SERVER_URL;

const socket = io(`wss://${SOCKET_SERVER_URL}`, {
  reconnectionDelayMax: 10000,
});

export default socket;
