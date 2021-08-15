import React from "react";
import styles from "./Register.module.css";
import NextImage from '../utils/NextImage'
import Form from "./Form";

export default function RegisterForm () {

    return (
        <div className={styles.screen}>

            <div className={styles.formContainer}>
                <div className={styles.headerImageBox}>
                    <NextImage 
                        loadersource='unsplash'
                        src={"photo-1554415707-6e8cfc93fe23?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"}
                        width={800}
                        height={300}
                        objectFit="cover"
                    />
                </div>

                <div className={styles.headingContainer}>
                    <h3>Register with carWash</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In dolorum iure dolore voluptatem ullam neque tempore eos repudiandae sed vero maiores quod, quas distinctio perspiciatis enim commodi quidem nostrum quia?</p>

                </div>

                <div className={styles.formFieldsContainer}>
                    <Form />
                </div>

                

            </div>

        </div>

    )
}