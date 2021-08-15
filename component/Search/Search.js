import React from 'react';
import styles from './Search.module.css'
import SearchInput from '../utils/SearchInput';
import FilterListRoundedIcon from '@material-ui/icons/FilterListRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import Modal from "../utils/modal"
import { style } from '@material-ui/system';
import Checkbox from '../utils/CheckBox'
import RangeSlider from '../utils/RangeSlider'
import Select from '../utils/Select'
import { LowPriority } from '@material-ui/icons';

export default function Search () {

    const [modal, setModal] = React.useState(false)

    return (
    <div className={styles.searchBox}>
        {modal &&  <Modal onClick={setModal}>
            <div className={styles.modal}>
                <h3 >FILTER OPTIONS</h3>
                <div className={styles.filterModal}>
                    <Checkbox label="Online"/>
                    <RangeSlider min={0} max={20} label="Location (in kilometer)"/>
                    <Select values={["High-to-Low", "Low-to-High"]} label="Price" />
                    <Select values={["High-to-Low", "Low-to-High"]} label="Rating" />
                </div>
            </div>
            
            </Modal>}
        <div className={styles.searchStrip}>
            <div className={styles.searchField}>
                    <SearchInput label="Search Car Wash" />
            </div>

            <button onClick={() => setModal(true)}><FilterListRoundedIcon /></button>
            <button><SearchRoundedIcon /> </button>
        </div>

    </div>
    )
}