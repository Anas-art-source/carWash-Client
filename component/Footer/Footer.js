import React from "react";
import styles from "./Footer.module.css"
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


export default function Footer () {

    return (
        <div className={styles.footerBox}>
            <div className={styles.bookingBox}>
                <div className={styles.questionBox}>
                    <h3>Ready to give your car a perfect wash?</h3>
                    <p>Let's get started!</p>
                </div>

                <button>Book Now</button>

            </div>

            <div className={styles.linkBox}>
                <div className={styles.companyNameBox}>
                    <h2>CarWash</h2>
                    <p>@ 2019</p>
                </div>

                <div>
                    <h4>Customers</h4>
                    <a href="#">Buyer</a>
                    <a href="#">Supplier</a>
                </div>

                <div>
                    <h4>Company</h4>
                    <a href="#">About us</a>
                    <a href="#">Careers</a>
                    <a href="#">Contact us</a>
                </div>

                <div>
                    <h4>Further information</h4>
                    <a href="#">Terms & Conditions </a>
                    <a href="#">Privacy Policy</a>
                </div>

                <div className={styles.socialMediaBox}>
                    <h4>Follow us</h4>
                    <div className={styles.iconBox}>
                        <a href="#"><FacebookIcon /></a>
                        <a href="#"><TwitterIcon /></a>
                        <a href="#"><LinkedInIcon /></a>
                    </div>
                </div>


            </div>

        </div>
    )
}