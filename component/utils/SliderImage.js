import React from "react";
import NextImage from "./NextImage";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import styles from "./SliderImage.module.css"

const ImageArray = [
    "photo-1494976388531-d1058494cdd8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    "photo-1489824904134-891ab64532f1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2089&q=80",
    "photo-1550355291-bbee04a92027?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3752&q=80",
    "photo-1549317661-bd32c8ce0db2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
]


export default function SliderImage () {
    const [slidePercent, setSlidePercent] = React.useState(0)
    const [slideIndex, setSlideIndex] = React.useState(1)

    const slidePercentage = 100/ImageArray.length


    function rightClickHandler () {
        setSlidePercent((prevState) => prevState - slidePercentage)
        setSlideIndex((prevState)=> prevState + 1)
    }

    function leftClickHandler () {
        setSlidePercent((prevState) => prevState  + slidePercentage)
        setSlideIndex((prevState)=> prevState - 1)

    }


    return (
        <div className={styles.imageContainer}>
        <div className={styles.imageSlideContainer} style={{transform: `translate(${slidePercent}%)`, width: `${ImageArray.length * 100}%`}}>

           {ImageArray.map(img => 
        <NextImage 
           loadersource="unsplash"
           src={img}
           width={1000}
           height={455}
           objectFit="cover"
           key={img}
           loading="lazy"
           />
        )} 
          
        </div>

        <span className={styles.pictureCounter}>
            {slideIndex}/{ImageArray.length}
        </span>
       
       {slideIndex !== 1 && 
        <span className={styles.leftArrow} onClick={leftClickHandler}>
               <ArrowBackIosIcon />
        </span>
       }

       {slideIndex !== ImageArray.length && 
        <span className={styles.rightArrow} onClick={rightClickHandler}>
               <ArrowForwardIosIcon />
        </span>
       }

   </div>
    )
}