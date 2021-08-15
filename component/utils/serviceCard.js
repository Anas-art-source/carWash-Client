import { Brightness1 } from "@material-ui/icons";
import React from "react";
import styles from './serviceCard.module.css'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';


export default function CityCard (props) {

    return (
        <div
        className={styles.cityCard}
        style={{backgroundImage: `url(${props.url})`,
            backgroundSize: "cover",
            ...props.styles
        }}
        >

        <h3>{props.service}</h3>
        <span className={styles.serviceLetter}>{props.service[0].toUpperCase()}</span>
        <a href="#">&rarr;</a>

        </div>
    )
}