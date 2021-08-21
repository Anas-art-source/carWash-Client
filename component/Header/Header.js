import React from "react";
import styles from "./Header.module.css"
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LocalCarWashIcon from '@material-ui/icons/LocalCarWash';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {useRouter} from 'next/router';
import Link from "next/link"
import FavCard from "../utils/FavCard";
import {useDispatch, useSelector} from "react-redux"
import { userProfileActions } from "../../store/userProfile";
import HeaderNamePlate from '../utils/headerNamePlate'
import { useCookies } from "react-cookie";
import { ReactReduxContext } from "react-redux";
import useFetch from '../hook/useFetch';
import {API_URL} from '../../global.variable'


export default function Header() {

    const HeaderRef = React.useRef()
    const [favoriteDisplay, setFavoriteDisplay] = React.useState(false)
    const [scrolled, setScrolled] = React.useState(false)
    const router = useRouter()
    const userProfile = useSelector(state => state.userProfile)
    const [fav, setFav] = React.useState()
    
    const [cookie] = useCookies()
    const dispatch = useDispatch()


    const {sendRequest, isLoading, isValid, setError, error, setIsValid} = useFetch()


  
    React.useEffect(async () => {

        document.addEventListener("scroll", () => {
            if (window.scrollY > 0) return setScrolled(true);
            return setScrolled(false)
        })

        
        // TAKES USER ID FROM COOKIE AND UPDATE USERPROFILE ON MOUNT
        if (cookie?.userProfile) {
            // const response = await sendRequest(`${API_URL}/api/v1/users/${cookie.userProfile.id}`, "GET")
            // console.log(response, "USERPROFILE IN HEADER")
            dispatch(userProfileActions.login(cookie.userProfile))
          }
          
       return () => {
           document.removeEventListener("scroll", () => {
            if (window.scrollY > 0) return setScrolled(true);
            return setScrolled(false)
        })
       }   
   
    }, [])


    React.useEffect(async () => {
        if (cookie.userProfile && favoriteDisplay) {
            const response = await sendRequest(`${API_URL}/api/v1/fav/${cookie.userProfile.id}`, "GET")
            if (response.message === "successful") {
                console.log(response, "FAV AT HEADER")
                setFav(response.data)
            } else {
                setFav("")
            }
        }

    }, [favoriteDisplay])


    return (
        <>

        {/* <div className={styles.loadAlert}>
            dsahfashdjklashfkj
        </div> */}


        <div className={scrolled ? styles.header_shadow : styles.header} ref={HeaderRef} >
            <div className={styles.headerLeft} onClick={() => router.push('/')}>
                <h1>Car Wash</h1>

            </div> 

            <div className={styles.headerCenter}>
            {!userProfile.login &&
                <>
                <AccountCircleIcon />
                <Link href="/action"><h3>LOGIN</h3></Link>
                </>
            }

            {userProfile.login && 
                 <>
                    <HeaderNamePlate name={userProfile.name} image={userProfile.photo} googleUser={userProfile.googleUser} />
                 </>
            }
            </div>

            
            <div className={styles.headerRight}>
                <span onClick={() => setFavoriteDisplay((prevState) => !prevState)}><FavoriteIcon /></span>
            </div>


            {favoriteDisplay && 
            <div className={styles.favoriteWindow}>
                {!fav && 
                <h4>No Favourites</h4>
                }
                {fav && fav.map(vendor =>  <FavCard key={vendor._id} vendorId={vendor.vendor.id} name={vendor.vendor.name} photo={vendor.vendor.photo} location={vendor.vendor.location} /> )}
            </div>
            }
        </div>

        </>
    )
}