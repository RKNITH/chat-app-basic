import {io} from "socket.io-client";

const socket = io('ws://localhost:8000');


export default socket;