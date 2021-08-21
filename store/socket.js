import { StarRateRounded } from "@material-ui/icons";
import { createSlice} from "@reduxjs/toolkit";
import {io} from 'socket.io-client';
import {API_URL} from '../global.variable'
import socket from "../socket/socket";


const initialState = {
    socket: "",
    connect: false,
    rooms: "",
    messages: []

}

const socketSlice = createSlice({
    name: "socket",
    initialState: initialState,
    reducers: {
        connect (state, action) {
            const socket = io.connect(action.payload)
            return {
                ...state,
                connect: true,
                socket: socket
            }
        },

        join (state, action) {
            state.socket.emit("join", action.payload)

            return {
                ...state,
                rooms: action.payload
            }
        },

        disconnect (state, action) {
            state.socket.emit("disconnect_room", action.payload) 
            return {
                socket: "",
                connect: false,
                rooms: "",
                message: ""
            }
        },

        sendMessage (state, action) {
            console.log(action.payload)
            state.socket.emit("send_message", action.payload.message, action.payload.roomId) 
            return state
        },

        recieveMessage (state) {

            let message = ''
            state.socket.on("recieve_message", message_obj => {
                message = message_obj
            })

            return {
                ...state,
                messages: message
            }
        }
    }
})


export const SocketActions = socketSlice.actions;
export default socketSlice.reducer