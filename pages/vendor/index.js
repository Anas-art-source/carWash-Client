import React from "react";
import Header from '../../component/Header/Header'
import Search from "../../component/Search/Search"
import Footer from '../../component/Footer/Footer'
import VendorSection from "../../component/vendorSection/VendorSection";

export default function AllVendorPage () {

    return (
        <>
            <Header />
            <Search />
            <VendorSection />
            <Footer />
        </>
    )
}