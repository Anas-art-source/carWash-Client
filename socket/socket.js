// import  {io} from "socket.io-client"



// export class Socket  {

//     constructor () {
//         this.socket = io('http://localhost:1000', { transports: ['websocket', 'polling', 'flashsocket'] })
//     }

//     sendMessage (message, room) {
//         this.socket.emit("send_message", message, room)
//     }

//     recieveMessage (fn) {
//         console.log("Herer")
//         this.socket.on("recieve_message", fn)
//     }

//     joinRoom(roomId) {
//         this.socket.emit("join_room", roomId)
//     }

// }

// const socket = new Socket();

// export default socket; 