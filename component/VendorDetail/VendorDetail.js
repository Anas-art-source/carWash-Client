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

export default function VendorDetail () {

    const [activateChat, setActivateChat] = React.useState(false)

    console.log(activateChat, "SSASA")


    
    return (
            <>
                <Header />
                <div className={styles.detailScreen}>

                    <div className={styles.detailVendorCard}> 
                        <div className={styles.imageContainer}>
                        <SliderImage />
                        </div>

                         <div className={styles.detailContainer}>
                            <div className={styles.nameRatingContainer}>
                                 <h2>The Master Card Wash</h2>

                                 <div className={styles.chatButton} onClick={() => setActivateChat((prevState) => !prevState)}>
                                     <ChatIcon />
                                     <h6>Chat With Us</h6>
                                     
                                 </div>

                                 <div className={styles.ratingContainer}>
                                     <h4>4.5</h4>
                                     <p>(340)</p>

                                 </div>
                            </div>

                            <div className={styles.additionDetailContainer}>
                                <p>Member since 4-10-2020</p>
                                <span></span>
                                <p>Operates in Karachi</p>
                                <span></span>
                                <p>0312-1202645</p>

                                <span></span>

                                <div className={styles.imageAvatarContainer}>
                                    <div className={styles.image}>
                                        <NextImage  
                                        loadersource="unsplash"
                                        src={"photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3744&q=80"}
                                        width={35}
                                        height={35}
                                        objectFit="cover"
                                   />
                                    </div>
                                    <div className={styles.image}><NextImage  
                                        loadersource="unsplash"
                                        src={"photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3744&q=80"}
                                        width={35}
                                        height={35}
                                        objectFit="cover"
                                   />
                                    </div>
                                    <div className={styles.image}><NextImage  
                                        loadersource="unsplash"
                                        src={"photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3744&q=80"}
                                        width={35}
                                        height={35}
                                        objectFit="cover"
                                   />
                                    </div>
                                </div>
                            </div>

                         </div>

                         <div className={styles.mapContainer}>
                             <Map />

                         </div>

                        <ul className={styles.productContainer}>
                            <h3 className={styles.serviceHeading}>Services</h3>
                            <li className={styles.productItemContainer}>
                                <div className={styles.nameDescriptionContainer}>
                                        <h4>
                                            Engine Wash - SUV
                                        </h4>
                                        <p>
                                            It covers entire engine wash of SUV vehicle. We used Pressure wash techniques to ensure all the dust are wipe out to give your car a best Wash
                                        </p>
                                </div>

                                <div className={styles.priceContainer}>
                                    <h2><span>Rs.</span> 800</h2>

                                </div>

                            </li>

                            <li className={styles.productItemContainer}>
                                <div className={styles.nameDescriptionContainer}>
                                        <h4>
                                            Engine Wash - SUV
                                        </h4>
                                        <p>
                                            It covers entire engine wash of SUV vehicle. We used Pressure wash techniques to ensure all the dust are wipe out to give your car a best Wash
                                        </p>
                                </div>

                                <div className={styles.priceContainer}>
                                    <h2><span>Rs.</span> 800</h2>

                                </div>

                            </li>

                        </ul>


                        <div className={styles.reviewContainer}>
                            <h3 className={styles.reviewHeading}>Reviews</h3>
                            <ReviewCard />

                            <AddReview />
                        </div>
                    </div>
                    
                    <div className={styles.chatBox}>
                                <Chat chatDisplay={activateChat} />
                        </div>
                 </div>  
            </>
    )
}