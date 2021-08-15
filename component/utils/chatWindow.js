import React from "react";
import styles from './chatWindow.module.css';
import { VscChevronUp, VscChevronDown } from "react-icons/vsc";
import { RiSendPlane2Fill } from "react-icons/ri";
import TextField from './textField'
import ChatItem from "./chatItem";


export default function ChatWindow (props) {

    const [chatDisplay, setChatDisplay] = React.useState(props.chatDisplay);

    const chatButtonActive = props.chatDisplay

    function onClickChat () {
        setChatDisplay((prevState) => !prevState)  
    }
    

    React.useEffect(() => {
            setChatDisplay(chatButtonActive)
    }, [chatButtonActive])


    return (
        <div className={chatDisplay ? styles.chat_box : styles.chat_box_not_active} >
            <div className={styles.chat_header}>
                <p>The Master Car Wash</p>
                {chatDisplay ? <VscChevronDown   onClick={onClickChat} />  : <VscChevronUp   onClick={onClickChat}/> }

            </div>

            <div className={styles.chat_display}>
                <div className={styles.chat_reciever}> 
                    <ChatItem sender={false} />
                    <ChatItem sender={true} />


                </div>

              

            </div>

            <div className={styles.chat_form}>
                <TextField placeholder="type message here..." setText={() => {}}/>
                <RiSendPlane2Fill />
            </div>

        </div>
    )
}