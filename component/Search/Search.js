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
import useFetch from '../hook/useFetch';
import { API_URL } from '../../global.variable';
import { useRouter } from 'next/router';

export default function Search () {
    const [searchQuery, setSearchQuery] = React.useState()
    const [autoComplete, setAutoComplete] = React.useState()
    const [noAutoComplete, setNoAutoComplete] = React.useState()
    const [searchBlur, setSearchBlur] = React.useState()
    const router = useRouter()

    console.log(searchQuery, "SEARCH QUERY")

    const {sendRequest, isLoading, isValid, setError, error, setIsValid} = useFetch()


    React.useEffect(async () => {
        const response = await sendRequest(`${API_URL}/api/v1/vendor/autocomplete?name=${searchQuery}`, "GET")
        console.log(response, "AUTOCOMPLETE")

        if (response.message === 'successful') {
        setAutoComplete(response.data)
        } else {
        setNoAutoComplete(response.message)
        setAutoComplete()
        }

        return async () => {
            const response = await sendRequest(`${API_URL}/api/v1/vendor/autocomplete?name=${searchQuery}`, "GET")
        }

    }, [searchQuery])
 

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
            <div className={styles.searchField} >
                    <SearchInput label="Search Car Wash" onChange={(e) => setSearchQuery(e.target.value)}  onFocus={() => setSearchBlur(true)} onBlur={() => setTimeout(() =>setSearchBlur(false), 1000 ) }/>

                    {(autoComplete &&  searchBlur ) && 
                    <div className={styles.searchSuggestion}>
                        {autoComplete.map(vendor => 
                            <h4 className={styles.autoComplete} onClick={(e) => { e.preventDefault(); router.push(`/vendor/${vendor._id}`) }} >{vendor.name}</h4>
                        )}
                    </div>
                    }
            </div>

            <button onClick={() => setModal(true)}><FilterListRoundedIcon /></button>
            <button><SearchRoundedIcon /> </button>
        </div>

    </div>
    )
}