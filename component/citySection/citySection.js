import { StylesProvider } from "@material-ui/core";
import React from "react";
import SectionHeading from "../utils/SectionHeading";
import ServiceCard from "../utils/serviceCard";
import styles from './serviceSection.module.css'

const Services = [
    {
        title: "Simple Car Wash",
        image: "https://images.unsplash.com/photo-1611239179213-d972da54091a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=80",
        link: "#1",
    },
    {
        title: "Special Car Wash",
        image: "https://images.unsplash.com/photo-1565689876697-e467b6c54da2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
        link: "#2"
    },
    {
        title: "Rubber Polish",
        image: "https://images.unsplash.com/photo-1615041611611-e53c16da999b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=894&q=80",
        link: "#3"
    },
    {
        title: "Pressure Wash",
        image: "https://images.unsplash.com/photo-1616804087352-0d82fc0c37bf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
        link: "#4"
    },
    {
        title: "Bucket Wash",
        image: "https://images.unsplash.com/photo-1605164599901-f8a1464a2c87?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
        link: "#5"
    },
    {
        title: "Car Polish",
        image: "https://images.unsplash.com/photo-1565689876115-23f4019e888d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=80",
        link: "#6"
    },
    {
        title: "Engine Wash",
        image: "https://images.unsplash.com/photo-1552656967-7a0991a13906?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
        link: "#7"
    },
    {
        title: "Interior Wash",
        image: "https://images.unsplash.com/photo-1614527255138-018e29ff34ee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
        link: "#8"
    },
    {
        title: "Tyre Polish",
        image: "https://images.unsplash.com/photo-1608248086047-12d70e2cd870?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
        link: "#9"
    },
    {
        title: "Detailing",
        image: "https://images.unsplash.com/photo-1605618312781-852920370c2e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
        link: "#10"
    }
]


export default function CitySection () {

    return (
        <div className={styles.serviceSectionBox}>
            <SectionHeading mainHeading="Services" secondaryHeading="We Offer Following Services and More"/>

            <div className={styles.serviceBox}>  
                {Services.map(service => 
                <div key={service.link}>
                    <ServiceCard url={service.image} service={service.title}  />
                </div>
                )}
            </div>
        </div>
    )
}