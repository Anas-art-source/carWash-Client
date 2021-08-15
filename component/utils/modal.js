import { StylesProvider } from "@material-ui/core"
import { useEffect, useState } from "react"
import { createPortal } from "react-dom";
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import styles from './modal.module.css'

const Portal = ({ children, onClick }) => {
    const [mounted, setMounted] = useState(false);
    const [display, setDisplay] = useState(true)

    function closeModal() {
        onClick(false)
    }

    useEffect(() => {
        setMounted(true)

        return () => setMounted(false)
    }, [])


    return (mounted && display) ? createPortal(
        <div>
        <div className={styles.backdrop} onClick={closeModal}></div>
        <div className={styles.modal}>
            <div className={styles.closeButton} onClick={closeModal}>
                <CloseRoundedIcon />
            </div>
            {children}
        </div>
    </div>, document.querySelector("#myportal")) : null
}

export default Portal