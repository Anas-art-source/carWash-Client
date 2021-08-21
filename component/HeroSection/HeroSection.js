import React from "react";
import styles from './HeroSection.module.css'
import Image from "next/image";
import HeroImage from '../images/heroImage.jpg'
import NextImage from '../utils/NextImage'
import { API_URL } from "../../global.variable";

export default function HeroSection (props) {

    console.log(styles)

    return (
        <div className={styles.heroSection}>
            
            <div className={styles.heroLeft}>
                <h1>Get Best Quality Car Wash for Your Car In Just Few Click!</h1>
                <button onClick={props.onClickVendor}>Get Started!</button>
            </div>

            <div className={styles.heroRight}>
                <NextImage 

                    loadersource='localhost'
                    src={`${API_URL}/photo/hero/heroImage.jpg`}
                    width={2000}
                    height={1200}
                    alt="hero image"
                    className={styles.heroImage}
                />
            </div>


        </div>
    )
}