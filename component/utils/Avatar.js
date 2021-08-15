import React from "react";
import styles from './Avatar.module.css'
import NextImage from "./NextImage";

export default function Avatar (props) {

    const dimension = props.large ? 40 : 30

    return (
        <div className={styles.avatar}  style={{width: `${dimension}px`, height: `${dimension}px`}}>
                        <NextImage  
                             loadersource={ props.loadersource ||"unsplash"}
                             src={props.src  ||"photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3744&q=80"}
                              width={dimension} 
                              height={dimension}
                             objectFit="cover"
                            />
        </div>
    )
}