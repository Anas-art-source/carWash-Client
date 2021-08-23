import React from "react";
import Header from '../../component/Header/Header'
import Search from "../../component/Search/Search"
import Footer from '../../component/Footer/Footer'
import VendorSection from "../../component/vendorSection/VendorSection";
import {API_URL} from "../../global.variable"

export default function AllVendorPage (props) {

    return (
        <>
            <Header />
            <Search />
            <VendorSection vendorsList={props.vendorsList} />
            <Footer />
        </>
    )
}


export async function getStaticProps () {

    const response = await fetch(`${API_URL}/api/v1/vendor`);
    const{ data }= await response.json();

    return {
        props: { 
            vendorsList: data 
         },
         revalidate: 10
    }
}