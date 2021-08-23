import React from "react";
import VendorDetailView from "../../../component/VendorDetail/VendorDetail"
import { API_URL } from "../../../global.variable";

export default function VendorDetail (props) {

    return (
        <> 
            {props.vendor.map(vendor => <VendorDetailView vendor={vendor}/> )}
            
        </>
    )
}


export async function getStaticPaths() {

    const response = await fetch(`${API_URL}/api/v1/vendor`);
    const {data} = await response.json()

    let pathArray = []
    for (let vendor of data ) {
        pathArray.push({params: {vendorId : vendor.id}})
    }


    console.log(pathArray)

    return {
        paths: pathArray,
        fallback: false
    }
}


export async function getStaticProps(context) {

    const vendorId = context.params.vendorId;

    const response = await fetch(`${API_URL}/api/v1/vendor/${vendorId}`);
    const {data} = await response.json()

    console.log(data, "DATA **************************************************")


    return {
        revalidate: 10,
        props: {
            vendor: data
        }
    }
}