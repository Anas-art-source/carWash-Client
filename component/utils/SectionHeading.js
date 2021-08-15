import React from 'react';
import styles from "./SectionHeading.module.css"

export default function SectionHeading (props) {
    return (
        <div className={styles.headingBox}>
            <h1 className={styles.mainHeading}>{props.mainHeading}</h1>
            <p className={styles.secondaryHeading}>{props.secondaryHeading}</p>
        </div>
    )
}