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
import { useSelector } from "react-redux";

export default function VendorCard (props) {
    const [isFav, setIsFav] = React.useState(null);
    const [isAlreadyFav, setIsAlreadyFav] = React.useState(props.fav);
    const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);
    const {sendRequest, isLoading, isValid, setError, error, setIsValid} = useFetch()


    React.useEffect(async () => {
        const vendorFavObj = {
            byUsers: cookies?.userProfile?.id,
            vendor: {
                name: props.name,
                photo: props.photos,
                location: props.location,
                id: props.id
            }
        }

        if (isFav === true) {
            const response =  await sendRequest(`${API_URL}/api/v1/fav/${cookies.userProfile.id}`, "POST", vendorFavObj, false)
        }

        if (isFav === false) {
            const response = await sendRequest(`${API_URL}/api/v1/fav/${cookies.userProfile.id}/${props.id}`, "DELETE", vendorFavObj, false)
        }

    }, [isFav])

    React.useEffect(() => {
        setIsAlreadyFav(props.fav)
    },[props.fav])
    
    
    return (
        <div className={styles.vendorCardContainer}>
            <div className={styles.imageContainer}>

               {isAlreadyFav && 
                <div className={styles.favoriteContainer} style={{color: "red"}} onClick={() => { 
                    setIsAlreadyFav((prevState) => false)
                    setIsFav(false) 
                }
                }>
                    <FavoriteRoundedIcon />                
                </div>
               }

               {!isAlreadyFav && 
                <div className={styles.favoriteContainer} style={{color: isFav ? "red" : "white"}} onClick={() => setIsFav((prevState) => !prevState)}>
                        {isFav ? <FavoriteRoundedIcon /> : <FavoriteBorderRoundedIcon  /> }                    
                 </div>
               }
                
                
                <NextImage
                    loadersource="localhost" 
                    src={props.photos}
                    width={320}
                    height={200}
                    objectFit="cover"
                />
            </div>

            <div className={styles.descriptionBox}>
                <div className={styles.nameRatingContainer}>
                     <Link href={`/vendor/${props.id}`}><h3 className={styles.namePlate}>{props.name}</h3></Link>
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

