import React from 'react';
import styles from "./VendorDetail.module.css"
import Header from '../Header/Header';
import NextImage from '../utils/NextImage';
import ChatIcon from '@material-ui/icons/Chat';
import ReviewCard from '../utils/ReviewCard';
import SliderImage from '../utils/SliderImage';
import { Translate } from '@material-ui/icons';
import Map from '../utils/Map'
import Chat from '../utils/chatWindow';
import AddReview from '../utils/addReview'
import useFetch from '../hook/useFetch';
import {API_URL} from '../../global.variable'
import {useRouter} from "next/router";
import {useSelector} from 'react-redux';
import Footer from '../Footer/Footer'


export default function VendorDetail () {

    const [activateChat, setActivateChat] = React.useState(false)
    const {sendRequest, isLoading, isValid, setError, error, setIsValid} = useFetch()
    const [vendor, setVendor] = React.useState()
    const router = useRouter();
    const userProfile = useSelector(state => state.userProfile)
    
    const vendorSide = userProfile.id === vendor?.owner ? true : false

    
    React.useEffect(async () => {

        if (!router.query.vendorId) return
        const response = await sendRequest(`${API_URL}/api/v1/vendor/${router.query.vendorId}`, "GET")

        const [data] = response.data
        setVendor(data)

        console.log(data, "VERNDOR DETAIL")

    }, [router])


    if (!vendor) {
        return null
    }

    
    
    return (
            <>
                <Header />
                <div className={styles.detailScreen}>

                    <div className={styles.detailVendorCard}> 
                        <div className={styles.imageContainer}>
                        <SliderImage photos={vendor.photos} />
                        </div>

                         <div className={styles.detailContainer}>
                            <div className={styles.nameRatingContainer}>
                                 <h2>{vendor.name}</h2>

                                 <div className={styles.chatButton} onClick={() => setActivateChat((prevState) => !prevState)}>
                                     <ChatIcon />
                                     <h6>Chat With Us</h6>
                                     
                                 </div>

                                 <div className={styles.ratingContainer}>
                                     <h4>{vendor.averageRating || 0}</h4>
                                     <p>({vendor.ratingCount || 0})</p>

                                 </div>
                            </div>

                            <div className={styles.additionDetailContainer}>
                                <p>Member since 4-10-2020</p>
                                <span></span>
                                <p>Operates in {vendor.location.city}</p>
                                <span></span>
                                <p>{vendor.contactNumber}</p>

                                <span></span>

                                <div className={styles.imageAvatarContainer}>

                                    {vendor.teamPhotos.map( tmPhoto => 
                                         <div className={styles.image}>
                                         <NextImage  
                                         loadersource="localhost"
                                         src={tmPhoto}
                                         width={35}
                                         height={35}
                                         objectFit="cover"
                                    />
                                     </div>
                                    )}
                                   
                                </div>
                            </div>

                         </div>

                         <div className={styles.mapContainer}>
                             <Map coordinates={vendor.location.coordinates} />

                         </div>

                        <ul className={styles.productContainer}>
                            <h3 className={styles.serviceHeading}>Services</h3>

                            {vendor.services.map( service => 
                                <li className={styles.productItemContainer}>
                                <div className={styles.nameDescriptionContainer}>
                                        <h4>
                                            {service.title}
                                        </h4>
                                        <p>
                                            {service.description}
                                        </p>
                                </div>

                                <div className={styles.priceContainer}>
                                    <h2><span>Rs.</span> {service.price}</h2>

                                </div>

                            </li>
                            )}

                        </ul>

                        <div className={styles.reviewContainer}>
                            <h3 className={styles.reviewHeading}>Reviews</h3>
                            {vendor.reviews ? vendor.reviews.map(review => <ReviewCard reviewObj={review} /> ) : <p>No reviews yet</p> }       
                                
                            {!vendorSide && <AddReview vendorId={vendor.id}  />}

                
                        </div>
                    </div>
                    
                    <div className={styles.chatBox}> 
                                <Chat chatDisplay={activateChat}   vendorId={vendor.owner} vendorName={vendor.name} vendorPhoto={vendor.teamPhotos[0]} />
                        </div>
                 </div>  

                <Footer />


            </>
    )
}