import React from "react";
import styles from './chatWindow.module.css';
import { VscChevronUp, VscChevronDown } from "react-icons/vsc";
import { RiSendPlane2Fill } from "react-icons/ri";
import TextField from './textField'
import ChatItem from "./chatItem";
import {useSelector, useStore} from "react-redux";
import {useDispatch} from 'react-redux';
import {SocketActions} from '../../store/socket';
import {API_URL} from '../../global.variable';
import { FormatListBulleted } from "@material-ui/icons";


export default function ChatWindow (props) {

    const [chatDisplay, setChatDisplay] = React.useState(props.chatDisplay);
    const userProfile = useSelector(state => state.userProfile);
    const socket = useSelector(state => state.socket.socket)
    const [message, setMessage] = React.useState()
    const [messageArray, setMessageArray] = React.useState([]);
    const dispatch = useDispatch()

    console.log(socket, "socket")

    const room = `${props.vendorId}-${userProfile.id}-${userProfile.name}`

    console.log(room)

    const chatButtonActive = props.chatDisplay

    function onClickChat () {
        setChatDisplay((prevState) => !prevState)  
    }
    

    React.useEffect(() => {
            setChatDisplay(chatButtonActive)
            dispatch(SocketActions.connect(API_URL))
            dispatch(SocketActions.join(room))


            return () => {
                dispatch(SocketActions.disconnect(room))
            }


        }, [chatButtonActive])

    React.useEffect(() => {
    },[])


    React.useEffect(() => {
        if (socket) {
        socket?.on("recieve_message", messageObj => handleMessage(messageObj))
        }
    }, [socket])


    function sendMessage () {

        if (!message) return
        
        const messageObj = {
            sender: {
                id: userProfile?.id,
                name: userProfile?.name,
                photo: userProfile.photo
            },
            reciever: {
                id: props.vendorId,
                name: props.vendorName,
                photo: props.vendorPhoto
            },
            message: message,
        }
        setMessage('')
        socket.emit("send_message", {messageObj})
    }

    function handleMessage (messageObj)  {
        const message = {...messageObj}
        setMessageArray(messages => [...messages, message])
    }



    console.log(messageArray, "message array")
    

    return (
        <div className={chatDisplay ? styles.chat_box : styles.chat_box_not_active} >
            <div className={styles.chat_header}>
                <p>{props.vendorName}</p>
                {chatDisplay ? <VscChevronDown   onClick={onClickChat} />  : <VscChevronUp   onClick={onClickChat}/> }

            </div>

            <div className={styles.chat_display}>
                <div className={styles.chat_reciever}> 
                    {/* <ChatItem sender={false}  /> */}

                    {messageArray && messageArray.map(messageObj => 
                    <ChatItem 
                    userIdentity={userProfile.googleUser ? "google" : "localhost"}
                    sender={messageObj.sender.id === userProfile.id ? true: false} 
                    photo={messageObj.sender.id === userProfile.id ? messageObj.sender.photo : messageObj.reciever.photo}
                    name={messageObj.sender.id === userProfile.id ? messageObj.sender.name : messageObj.reciever.name}
                    key={messageObj._id} 
                    message={messageObj.message}
                    timestamp={messageObj.timestamp}
                    />

                    )}

                </div>

              

            </div>

            <div className={styles.chat_form}>
                <TextField placeholder="type message here..." setText={setMessage} value={message}/>
                <RiSendPlane2Fill  onClick={sendMessage}/>
            </div>

        </div>
    )
}

