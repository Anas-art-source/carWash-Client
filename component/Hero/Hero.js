import React from "react";
import styles from './Hero.module.css'
import Image from "next/image";
import TextInput from '../utils/TextInput';
import Modal from "../utils/modal";
import useWindowSize from "../hook/useWindowSize"

export default function Hero() {
    const [modal, setModal] = React.useState(false)
    const [heroImageHeight, setHeroImageHeight] = React.useState(1000)
    const {width, height} = useWindowSize()    
    

    React.useEffect(() => {
        if (width < 1000) {
            setHeroImageHeight(2000)
        }
        if (width < 700) {
            setHeroImageHeight(2500)
        }
         
    }, [width])

    return (
        <div className={styles.heroSection}>
            <Image
                src={'photo-1485291571150-772bcfc10da5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1700&q=80'}
                width={2400}
                height={heroImageHeight}
                objectFit="cover"
                className={styles.heroImg}
                alt="hero image"
            />

            <div className={styles.heroActionBox}>
                <h1>Best Quality Car Wash </h1>
                <form className={styles.heroForm}>
                    <TextInput className={styles.searchInput} />

                    <div className={styles.heroFormButtonBox}>
                        <button className={styles.filter} onClick={(e) => {
                            e.preventDefault();
                            setModal(true)
                        }}>
                            Filter
                        </button>
                        <button className={styles.submit} >Search</button>
                    </div>
                </form>

                {modal && <Modal onClick={setModal} >
                    <h4>Filter Options</h4>
                </Modal>}

            </div>
        </div>
    )
}