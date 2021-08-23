import React from "react";
import VendorCard from "../utils/VendorCard";
import styles from './VendorSection.module.css';
import useFetch from "../hook/useFetch";
import {API_URL} from '../../global.variable'
import { useSelector } from "react-redux";


// const DUMMY_DATA_VENDOR = [
//     {
//         name: "ABC Car wash and services",
//         location: "Gulshan, Block 4, Street 13, Karachi",
//         ratingAverage: 4.3,
//         ratingCount: 22,
//         photo: "photo-1503376780353-7e6692767b70?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
//         id: "grewt"
//     },
//     {
//         name: "ABC Car wash and services",
//         location: "Gulshan, Block 4, Street 13, Karachi",
//         ratingAverage: 4.3,
//         ratingCount: 22,
//         photo: "photo-1503376780353-7e6692767b70?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
//         id: "dgfer"
//     },
//     {
//         name: "ABC Car wash and services",
//         location: "Gulshan, Block 4, Street 13, Karachi",
//         ratingAverage: 4.3,
//         ratingCount: 22,
//         photo: "photo-1503376780353-7e6692767b70?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
//         id: 'sadfsa'
//     },
//     {
//         name: "ABC Car wash and services",
//         location: "Gulshan, Block 4, Street 13, Karachi",
//         ratingAverage: 4.3,
//         ratingCount: 22,
//         photo: "photo-1503376780353-7e6692767b70?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
//         id: "SAS"
//     },
//     {
//         name: "ABC Car wash and services",
//         location: "Gulshan, Block 4, Street 13, Karachi",
//         ratingAverage: 4.3,
//         ratingCount: 22,
//         photo: "photo-1503376780353-7e6692767b70?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
//         id: "SAD"
//     },
//     {
//         name: "ABC Car wash and services",
//         location: "Gulshan, Block 4, Street 13, Karachi",
//         ratingAverage: 4.3,
//         ratingCount: 22,
//         photo: "photo-1503376780353-7e6692767b70?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
//         id: "sdadas"
//     },
//     {
//         name: "ABC Car wash and services",
//         location: "Gulshan, Block 4, Street 13, Karachi",
//         ratingAverage: 4.3,
//         ratingCount: 22,
//         photo: "photo-1503376780353-7e6692767b70?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
//         id: 'sadasd'
//     },
//     {
//         name: "ABC Car wash and services",
//         location: "Gulshan, Block 4, Street 13, Karachi",
//         ratingAverage: 4.3,
//         ratingCount: 22,
//         photo: "photo-1503376780353-7e6692767b70?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
//         id: 'aqsafd'
//     },
//     {
//         name: "hafsa or me or sari duniya sssssssssssssssssssssssssssssssssssssssssssss",
//         location: "Gulshan, Block 4, Street 13, Karachi",
//         ratingAverage: 4.3,
//         ratingCount: 22,
//         photo: "photo-1503376780353-7e6692767b70?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
//         id: "213124"
//     },
//     {
//         name: "ABC Car wash and services",
//         location: "Gulshan, Block 4, Street 13, Karachi",
//         ratingAverage: 4.3,
//         ratingCount: 22,
//         photo: "photo-1503376780353-7e6692767b70?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
//         id: '2231'
//     },
//         {
//         name: "ABC Car wash and services",
//         location: "Gulshan, Block 4, Street 13, Karachi",
//         ratingAverage: 4.3,
//         ratingCount: 22,
//         photo: "photo-1503376780353-7e6692767b70?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
//         id: "123"
//     },
// ]

export default function VendorSection (props) {

    const [vendors, setVendors] = React.useState([]);
    const userProfile = useSelector(state => state.userProfile)
    const {sendRequest, isLoading, isValid, setError, error, setIsValid} = useFetch()

    let userFavArray;
    if (userProfile) {
        userFavArray = userProfile.favs?.map(fav => fav.vendor.id)
    }   

    console.log(props.vendorsList)

    React.useEffect(async () => {

        // const response = await  sendRequest(`${API_URL}/api/v1/vendor`, "GET");
        // if (response.message === "successful") {
        //     setVendors(response.data)
        // } else {
        //     setError(response.message)
        //     console.log(response)
        // }

    }, [])

    return (
        <div className={styles.vendorSectionContainer}>

            {props.vendorsList.map(vendor => <VendorCard 
             name={vendor.name} 
             fav={userFavArray?.includes(vendor.id) ? true : false}
            location={vendor.location.address}
            ratingAverage={vendor.averageRating || 0}
             ratingCount={vendor.ratingCount || 0} 
             photos={vendor.photos[0]} 
             key={vendor.name}
             id={vendor.id}
             key={vendor.id}
             />
             
             ) }


             {error && <h2>{error}</h2>}
        </div>

    )
}