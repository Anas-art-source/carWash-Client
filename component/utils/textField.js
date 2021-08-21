import React, { useEffect, useRef} from 'react';
import  styles from './textField.module.css'

function TextField (props) {

    const text = useRef(null);
    useEffect( () => {
        text.current.focus()
    }, [])

    const classTextField = `${styles.textInput} ${props.class}`



    function grow (e) {
        console.log(e.target.scrollHeight)
        console.log(e.target)
        const scrollH = e.target.scrollHeight;
        text.current.style.height = `${scrollH}px`

        
        // const scrollH = text.current.scrollHeight;
        // console.log("SCROLL", scrollH, text.current.style.height);

        // text.current.style.height = `${scrollH}px`
        // text.current.style.height = `${scrollH}px`
    }

    return (
        <textarea  type="text" className={classTextField} placeholder={props.placeholder} ref={text} onChange={(e) => props.setText(e.target.value)} onKeyUp={grow}  value={props.value} ></textarea>
    )
}

export default TextField;