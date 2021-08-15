import React from "react";
import styles from './VendorCard.module.css'
import NextImage from '../utils/NextImage'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import Link from 'next/link'
import {useCookies} from 'react-cookie'
import useFetch from "../hook/useFetch";
import {API_URL} from "../../global.variable"

export default function VendorCard (props) {
    const [isFav, setIsFav] = React.useState(null);
    const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);
    const {sendRequest, isLoading, isValid, setError, error, setIsValid} = useFetch()


    // byUsers: mongoose.Types.ObjectId,
    // vendor: {
    //     name: String,
    //     photo: String, 
    //     location: String,
    //     id: mongoose.Types.ObjectId
    // }

    // http://localhost

    
    React.useEffect(async () => {
        

        const vendorFavObj = {
            byUsers: cookies.userProfile.id,
            vendor: {
                name: props.name,
                photo: props.photo,
                location: props.location,
                id: props.id
            }
        }

        if (isFav === true) {

            const response =  await sendRequest(`${API_URL}/api/v1/fav/${cookies.userProfile.id}`, "POST", vendorFavObj, false)

            console.log(response)



        }

        if (isFav === false) {

            const response = await sendRequest(`${API_URL}/api/v1/fav/${cookies.userProfile.id}/${props.id}`, "DELETE", vendorFavObj, false)

            console.log(response)

        }

    }, [isFav])
    
    console
    
    return (
        <div className={styles.vendorCardContainer}>
            <div className={styles.imageContainer}>
                <div className={styles.favoriteContainer} style={{color: isFav ? "red" : "black"}} onClick={() => setIsFav((prevState) => !prevState)}>
                    {isFav ? <FavoriteRoundedIcon /> : <FavoriteBorderRoundedIcon  /> }                    
                </div>

                
                <NextImage
                    loadersource="unsplash" 
                    src={props.photo}
                    width={320}
                    height={200}
                    objectFit="cover"
                />
            </div>

            <div className={styles.descriptionBox}>
                <div className={styles.nameRatingContainer}>
                     <Link href="/vendor/someVendorId"><h3 className={styles.namePlate}>{props.name}</h3></Link>
                     <div className={styles.ratingContainer}>
                        <h3>{props.ratingAverage}</h3>
                        <p>({props.ratingCount})</p>
                     </div>
                </div>

                <div className={styles.locationContainer}>
                    <LocationOnOutlinedIcon />
                    <p>{props.location}</p>
                </div>

            </div>

        </div>
    )
}

