import React from "react";
import VendorCard from "../utils/VendorCard";
import styles from './VendorSection.module.css'


const DUMMY_DATA_VENDOR = [
    {
        name: "ABC Car wash and services",
        location: "Gulshan, Block 4, Street 13, Karachi",
        ratingAverage: 4.3,
        ratingCount: 22,
        photo: "photo-1503376780353-7e6692767b70?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
        id: "grewt"
    },
    {
        name: "ABC Car wash and services",
        location: "Gulshan, Block 4, Street 13, Karachi",
        ratingAverage: 4.3,
        ratingCount: 22,
        photo: "photo-1503376780353-7e6692767b70?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
        id: "dgfer"
    },
    {
        name: "ABC Car wash and services",
        location: "Gulshan, Block 4, Street 13, Karachi",
        ratingAverage: 4.3,
        ratingCount: 22,
        photo: "photo-1503376780353-7e6692767b70?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
        id: 'sadfsa'
    },
    {
        name: "ABC Car wash and services",
        location: "Gulshan, Block 4, Street 13, Karachi",
        ratingAverage: 4.3,
        ratingCount: 22,
        photo: "photo-1503376780353-7e6692767b70?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
        id: "SAS"
    },
    {
        name: "ABC Car wash and services",
        location: "Gulshan, Block 4, Street 13, Karachi",
        ratingAverage: 4.3,
        ratingCount: 22,
        photo: "photo-1503376780353-7e6692767b70?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
        id: "SAD"
    },
    {
        name: "ABC Car wash and services",
        location: "Gulshan, Block 4, Street 13, Karachi",
        ratingAverage: 4.3,
        ratingCount: 22,
        photo: "photo-1503376780353-7e6692767b70?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
        id: "sdadas"
    },
    {
        name: "ABC Car wash and services",
        location: "Gulshan, Block 4, Street 13, Karachi",
        ratingAverage: 4.3,
        ratingCount: 22,
        photo: "photo-1503376780353-7e6692767b70?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
        id: 'sadasd'
    },
    {
        name: "ABC Car wash and services",
        location: "Gulshan, Block 4, Street 13, Karachi",
        ratingAverage: 4.3,
        ratingCount: 22,
        photo: "photo-1503376780353-7e6692767b70?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
        id: 'aqsafd'
    },
    {
        name: "hafsa or me or sari duniya sssssssssssssssssssssssssssssssssssssssssssss",
        location: "Gulshan, Block 4, Street 13, Karachi",
        ratingAverage: 4.3,
        ratingCount: 22,
        photo: "photo-1503376780353-7e6692767b70?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
        id: "213124"
    },
    {
        name: "ABC Car wash and services",
        location: "Gulshan, Block 4, Street 13, Karachi",
        ratingAverage: 4.3,
        ratingCount: 22,
        photo: "photo-1503376780353-7e6692767b70?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
        id: '2231'
    },
        {
        name: "ABC Car wash and services",
        location: "Gulshan, Block 4, Street 13, Karachi",
        ratingAverage: 4.3,
        ratingCount: 22,
        photo: "photo-1503376780353-7e6692767b70?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
        id: "123"
    },
]

export default function VendorSection () {

    return (
        <div className={styles.vendorSectionContainer}>
            {DUMMY_DATA_VENDOR.map(vendor => <VendorCard 
             name={vendor.name} 
            location={vendor.location}
            ratingAverage={vendor.ratingAverage}
             ratingCount={vendor.ratingCount} 
             photo={vendor.photo} key={vendor.name}
             id={vendor.id}
             key={vendor.id}
             />
             
             ) }
        </div>

    )
}