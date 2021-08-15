import  {io} from "socket.io-client"



export class Socket  {

    constructor () {
        this.socket = io('http://localhost:1000', { transports: ['websocket', 'polling', 'flashsocket'] })
    }

    sendMessage (messageObj) {
        console.log(messageObj, "message in socket")
        this.socket.emit("send_message", messageObj)
    }

}

const socket = new Socket();

export default socket; 