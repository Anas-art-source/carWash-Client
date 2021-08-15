import React from "react";


export default function useFormValidation (validityFunction) {
    const [value, setValue]  = React.useState("")
    const [isFocus, setIsFocus] = React.useState(true);

    const valueIsValid = validityFunction(value);

    let showValidity = true;

    if (isFocus) {
        showValidity = true
    } else if (!isFocus && !valueIsValid) {
        showValidity = false
    }


    

    return {
        setValue,
        setIsFocus,
        showValidity,
        value,
        isFocus

    }
}