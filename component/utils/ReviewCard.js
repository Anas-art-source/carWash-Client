import React from "react";
import styles from "./ReviewCard.module.css"
import Rating from '@material-ui/lab/Rating';
import NextImage from "./NextImage";

export default function ReviewCard () {

    return (
        <div className={styles.reviewContainer}>
            <div className={styles.imageAvatar}>
                <NextImage 
                    loadersource="unsplash"
                    src={"photo-1539571696357-5a69c17a67c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2662&q=80"}
                    width={40}
                    height={40}
                    objectFit="cover"
                />
            </div>

            <div className={styles.reviewContentContainer}>
                <h4 className={styles.name}>Anas Khan</h4>
                <div className={styles.ratingStarContainer}>
                         <Rating name="read-only" value={5} readOnly />
                         <p>a week ago</p>
                </div>

                <p className={styles.reviewText}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias soluta, recusandae consectetur maxime modi veniam eos! Porro, nam facere expedita inventore laboriosam repellendus nemo perferendis facilis ducimus harum excepturi nulla.
                </p>


            </div>
        </div>
    )
}