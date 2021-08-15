import React from "react";
import Avatar from "./Avatar";
import styles from './chatItem.module.css'


export default function ChatItem (props) {



    return (
        <div className={props.sender ? styles.chatItemContainer_primary : styles.chatItemContainer_secondary  }>
            <Avatar />

            <div className={props.sender ? styles.chatTextContainer_primary : styles.chatTextContainer_secondary}>
                <div  className={props.sender ? styles.chatText_primary : styles.chatText_secondary  }>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique facilis minima magnam placeat. Quae, sed.</p>
                </div>

                <div className={styles.timeStampContainer}>
                    <p>4 March</p>
                    <p>8:11 am</p>
                </div>
            </div>
        </div>
    )
}