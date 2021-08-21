import React from "react";
import styles from "./ReviewCard.module.css"
import Rating from '@material-ui/lab/Rating';
import NextImage from "./NextImage";
import Moment from 'react-moment';

export default function ReviewCard (props) {

    
    const {reviewObj} = props;
    const loadersource = reviewObj.byGoogleUser ? "google" : "localhost"


    return (
        <div className={styles.reviewContainer}>

            <div className={styles.imageAvatar}>
                <NextImage 
                    loadersource={loadersource}
                    src={reviewObj.byGoogleUser?.photo || reviewObj.byOwnUser.photo}
                    width={40}
                    height={40}
                    objectFit="cover"
                />
            </div>

            <div className={styles.reviewContentContainer}>
                <h4 className={styles.name}>{reviewObj.byGoogleUser?.name || reviewObj.byOwnUser.name}</h4>
                <div className={styles.ratingStarContainer}>
                         <Rating name="read-only" value={reviewObj.rating} readOnly />
                         {/* <p>a week ago</p> */}
                         <Moment fromNow format="DD MM YYYY hh:mm:ss">{reviewObj.date}</Moment>

                </div>

                <p className={styles.reviewText}>
                    {reviewObj.review}
                </p>
            </div>
        </div>
    )
}