import React from "react";
import SectionHeading from "../utils/SectionHeading";
import Image from "next/image";
import NextImage from "../utils/NextImage";
import useWindowSize from "../hook/useWindowSize";
import styles from './registerSection.module.css';
import { useRouter } from "next/router";

export default function RegisterSection () {

    const {width, height} = useWindowSize()
    const [heroImageHeight, setHeroImageHeight] = React.useState(600);
    const router = useRouter()
    

    React.useEffect(() => {
        if (width < 1000) {
            setHeroImageHeight(900)
        }
        if (width < 700) {
            setHeroImageHeight(1000)
        }
         
    }, [width])

    function onClickRegister () {

        router.push('/register')
    }

    return (
        <div className={styles.registerSectionBox}>
            <SectionHeading mainHeading="Partners" secondaryHeading="You wash the car, we handle the rest" />
            <div className={styles.actionBox}>
                <NextImage 
                    loadersource="unsplash"
                    src={'photo-1520340356584-f9917d1eea6f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2089&q=80'}
                    width={2200}
                    height={heroImageHeight}
                    objectFit="cover"
                />

                <div className={styles.descriptionBox}>
                    <h4>List your car wash on CarWash</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero illo unde expedita ad, laborum blanditiis magni qui provident eum, quod, sunt accusamus ut odio non tempore ex vero. Dolorem, aliquam.</p>
                    <button onClick={onClickRegister}>Get Register</button>
                </div>

            </div>

        </div>
    )
    
}