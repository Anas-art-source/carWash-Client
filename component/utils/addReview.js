import React from "react";
import Avatar from "./Avatar";
import Rating from './Rating'
import TextField  from "./textField";
import styles from './addReview.module.css';
import { IoSend } from "react-icons/io5";


export default function AddReview () {

    return (
        <div className={styles.addReviewContainer} >
            <Avatar large={true} />

            <div className={styles.reviewContentContainer}>
                <Rating />
                <div className={styles.reviewField}>
                    <TextField class={styles.textArea} setText={() => {}} placeholder="Add a review...."/>
                    <IoSend />
                </div>

            </div>
        </div>
    )
}