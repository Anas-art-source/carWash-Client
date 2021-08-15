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
    const [noFav, setNoFav] = React.useState()

    const [cookie] = useCookies()
    const dispatch = useDispatch()

    const {sendRequest, isLoading, isValid, setError, error, setIsValid} = useFetch()


  
    React.useEffect(() => {

        document.addEventListener("scroll", () => {
            if (window.scrollY > 0) return setScrolled(true);
            return setScrolled(false)
        })

        if (cookie?.userProfile) {
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
        if (favoriteDisplay) {
            const response = await sendRequest(`${API_URL}/api/v1/fav/${cookie.userProfile.id}`, "GET")
            console.log(response)
            if (response.message === "successful") {
            } else {
                
                console.log("hererer")
                setNoFav(true)
            }


        }

    }, [favoriteDisplay])

  

    return (
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
                {noFav && 
                <h4>No Favourites</h4>
                }
                {!noFav &&
                <FavCard />
                }
            </div>
            }
        </div>
    )
}