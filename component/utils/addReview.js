import React from "react";
import Avatar from "./Avatar";
import Rating from './Rating'
import TextField  from "./textField";
import styles from './addReview.module.css';
import { IoSend } from "react-icons/io5";
import {useSelector} from 'react-redux';
import {useRouter} from 'next/router'
import useFetch from "../hook/useFetch";
import { API_URL } from "../../global.variable";


export default function AddReview (props) {

    const userProfile = useSelector(state => state.userProfile)
    const router = useRouter()
    const [review, setReview] = React.useState()
    const [ratingNumber, setRatingNumber] = React.useState(null)
    const  {sendRequest, isLoading, isValid, setError, error, setIsValid} = useFetch()


    function reviewContainerClickHandler () {
        if (userProfile.login) return
        router.push('/action')
    }


    async function submitReviewHandler () {

        if (!ratingNumber) return

        const reviewObj = {
            review: review,
            rating: ratingNumber,
            forVendor: props.vendorId,
            byGoogleUser: userProfile.googleUser ? userProfile.id : null,
            byOwnUser: !userProfile.googleUser ? userProfile.id : null
        }

        const response = await sendRequest(`${API_URL}/api/v1/reviews`, "POST", reviewObj, false);

       
        if (response.message === 'successful') {
            setReview("")
            setRatingNumber(0)
        }
    }

    return (
        <div className={styles.addReviewContainer} onClick={reviewContainerClickHandler} >
            <Avatar large={true} src={userProfile.photo} loadersource={userProfile.googleUser ? "google": "localhost"} />

            <div className={styles.reviewContentContainer}>
                <Rating setValue={setRatingNumber} value={ratingNumber}/>
                <div className={styles.reviewField}>
                    <TextField class={styles.textArea} value={review} setText={setReview} placeholder="Add a review...."/>
                    <IoSend onClick={submitReviewHandler} />
                </div>

            </div>
        </div>
    )
}