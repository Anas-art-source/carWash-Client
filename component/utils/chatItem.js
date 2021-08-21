import React from "react";
import Avatar from "./Avatar";
import styles from './chatItem.module.css'
import Moment from 'react-moment';


export default function ChatItem (props) {

    const date = new Date(props.timestamp);

    const days = {
        0: "Sun",
        1: "Mon",
        2: "Tue",
        3: "Wed",
        4: "Thur",
        5: "Fri",
        6: "Sat"
    }

    const timeStamp = `${days[date.getDay()]} ${date.getHours()}:${date.getMinutes()}`

    return (
        <div className={props.sender ? styles.chatItemContainer_primary : styles.chatItemContainer_secondary  }>
            <Avatar large={false} loadersource={props.userIdentity} src={props.photo}  />

            <div className={props.sender ? styles.chatTextContainer_primary : styles.chatTextContainer_secondary}>
                <div  className={props.sender ? styles.chatText_primary : styles.chatText_secondary  }>
                    <p className={styles.chatText}>{props.message}</p>
                </div>

                <div className={styles.timeStampContainer}>
                    <p>{timeStamp}</p>
                    {/* <Moment  format="LT"> {props.timestamp} </Moment> */}
                    {/* <p>8:11 am</p> */}
                </div>
            </div>
        </div>
    )
}