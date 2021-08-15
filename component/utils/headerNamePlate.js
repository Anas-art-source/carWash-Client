import React from "react";
import Avatar from "./Avatar"
import styles from './headerNamePlate.module.css'

export default function HeaderNamePlate (props) {

    return (

        <div className={styles.headerNamePlate} >
            <Avatar 
                large={false}
                loadersource={props.googleUser ? "google" : "localhost"}
                src={props.image}
            />

            <h3>{props.name}</h3>
        </div>

    )
}