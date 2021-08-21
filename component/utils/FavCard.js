import React from "react";
import NextImage from "./NextImage";
import styles from './FavCard.module.css'
import { IoLocationOutline } from "react-icons/io5";
import {useRouter} from 'next/router'


export default function FavCard (props) {

    const router = useRouter()

    return (
        <li className={styles.favItem}>
            <div className={styles.favPicture}>
                <NextImage
                loadersource="localhost"
                src={props.photo}
                width={50}
                height={50}
                objectFit="cover"
                />

            </div>

            <div className={styles.favDetail}>
                <h4 onClick={() => router.push(`/vendor/${props.vendorId}`)}>{props.name}</h4>
                <p><IoLocationOutline /> {props.location}</p>
            </div>

        </li>
    )
}