import React from "react";
import NextImage from "./NextImage";
import styles from './FavCard.module.css'
import { IoLocationOutline } from "react-icons/io5";


export default function FavCard () {


    return (
        <li className={styles.favItem}>
            <div className={styles.favPicture}>
                <NextImage
                loadersource="unsplash"
                src={'photo-1549553059-1b9bf4151b4e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'}
                width={50}
                height={50}
                objectFit="cover"
                />

            </div>

            <div className={styles.favDetail}>
                <h4>The Master Car Wash</h4>
                <p><IoLocationOutline /> Gulshan-e-iqbal, Karachi</p>
            </div>

        </li>
    )
}