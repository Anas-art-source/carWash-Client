import React from "react";
import Image from "next/image";

export default function NextImage (props) {

    let loaderFunc = () => {};

    if (props.loadersource === 'unsplash')
        loaderFunc = ({ src, width, quality }) => {
        return `https://images.unsplash.com/${src}?w=${width}&q=${quality || 75}`
      }

      if (props.loadersource === 'google')
      loaderFunc = ({ src, width, quality }) => {
         // BECAUSE PATH STARTS AFTER 34TH CHARACTER 
        src = props.src.slice(34)
      return `https://lh3.googleusercontent.com/${src}?w=${width}&q=${quality || 75}`
    }

    if (props.loadersource === 'localhost') {

      loaderFunc = ({ src, width, quality }) => {
        // BECAUSE PATH STARTS AFTER 34TH CHARACTER 
        // src = props.src.slice(41)
        const source = src.split("/photo")[1];
        console.log(source)
       return `https://car-wash-123.herokuapp.com/photo${source}?w=${width}&q=${quality || 75}`

      }
      
      console.log(props.src)
    }

    return <Image 
        alt="image"
        loader={loaderFunc}
        {...props}
    />
}