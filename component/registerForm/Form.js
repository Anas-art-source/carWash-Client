import React from "react";
import styles from './Form.module.css'
import ControllableMap from '../utils/controllingMap'
import { IoIosTrash} from "react-icons/io";
import useFormValidation from "../hook/useFormValidation";
import useFetch from "../hook/useFetch";
import {useSelector} from "react-redux";
import {useRouter} from 'next/router'
import userProfile from "../../store/userProfile";
import {useCookies} from 'react-cookie'

function ServiceDetailForm (props) {
    // FORM VALIDATION USING CUSTOM HOOK
    const {value:title ,isFocus:isTitleFocus  , setValue: setTitle, setIsFocus: setTitleIsFocus, showValidity: titleIsValid} = useFormValidation( (value) => value.length > 0)
    const {value:description ,isFocus: isDescriptionFocus  , setValue: setDescription, setIsFocus: setDescriptionIsFocus, showValidity: descriptionIsValid} = useFormValidation( (value) => value.length > 0)
    const {value:price ,isFocus: isPriceFocus  , setValue: setPrice, setIsFocus: setPriceIsFocus, showValidity: priceIsValid} = useFormValidation( (value) => value > 0)



    // CHECK IF ALL THE INPUT IS BLURRED
    // CHECK IF THE ALL THE INPUT IS VALID
    // THESE TWO CHECK SHOULD BE DONE ON THE CHANGE OF ALL THE INPUT
    // WE SHOULD SEND FORM OBJECT WITH INDEX

    React.useEffect(() => {
            console.log(!isTitleFocus , !isDescriptionFocus , !isPriceFocus)
        if (!isTitleFocus && !isDescriptionFocus && !isPriceFocus) {
            console.log("here")

            if (titleIsValid && descriptionIsValid && priceIsValid) {

                props.setServiceDetailObj({
                    index: props.number - 1,
                    data : {
                        title: title,
                        description: description,
                        price: price
                    }
                })
            }
        }


    }, [title, description, price, isTitleFocus, isDescriptionFocus, isPriceFocus])




   

    return (
        <div className={styles.servicesContainer}>
        <div className={styles.serviceHeadingBox}>
            <h5>Service {props.number}</h5>
            <div className={styles.btnRemove} onClick={() => props.deleteIndex(props.number - 1)}>
                {/* <IoTrashBinOutline /> */}
                <IoIosTrash  style={{fontSize: "20px", fill: "red"}}/>
            </div>
        </div>

        <div className={titleIsValid ? styles.servicesFieldWrapper : styles.servicesFieldWrapper_error}>
             <label htmlFor="title"> Title </label>
             <input type="text"  id="title" name="title"  placeholder="for example: Pressure wash"  onChange={(e) => setTitle(e.target.value)} onFocus={() => setTitleIsFocus(true)} onBlur={() => setTitleIsFocus(false)} />    
         </div>   

         <div className={descriptionIsValid ? styles.servicesFieldWrapper : styles.servicesFieldWrapper_error}>
             <label htmlFor="description"> Description </label>
             <input type="text"  id="description" name="description"  placeholder="for example: Wipe out all the stain and leave car with refreshing aroma"  onChange={(e) => setDescription(e.target.value)} onFocus={() => setDescriptionIsFocus(true)} onBlur={() => setDescriptionIsFocus(false)} />    
         </div>   

         <div className={priceIsValid ? styles.servicesFieldWrapper : styles.servicesFieldWrapper_error}>
             <label htmlFor="price"> Price </label>
             <input type="number"  id="price" name="price"  placeholder="for example: Rs 500"  min="0"  onChange={(e) => setPrice(e.target.value)} onFocus={() => setPriceIsFocus(true)} onBlur={() => setPriceIsFocus(false)}/>    
         </div>   
    </div>
    )
}



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export default function Form () {
    const serviceDetailContainerRef = React.useRef();
    const [add, setAdd] = React.useState([1]);
    const [teamPhotos, setTeamPhotos] = React.useState([])
    const [businessPhotos, setTBusinessPhotos] = React.useState([])
    const [deleteNumber, setDeleteNumber] = React.useState(null);
    const [serviceDetailArray, setServiceDetailArray] = React.useState(["a"])
    const [serviceDetailObj, setServiceDetailObj] = React.useState({
        index: 0,
        data: {
            title: "",
            description: "",
            price: 0
        }
    })

    const [locationCoords, setLocationCoords] = React.useState([])
    const [success, setSuccess] = React.useState(null)

    // FORM VALIDATION USING CUSTOM HOOK
    const {value: name ,setValue: setName, setIsFocus: setNameIsFocus, showValidity: nameIsValid} = useFormValidation( (value) => value.length > 0)
    const {value: contactNumber ,setValue: setNumber, setIsFocus: setNumberIsFocus, showValidity: numberIsValid} = useFormValidation( (value) => value.length > 0 && value.length <= 12 )
    const {value: address ,setValue: setAddress, setIsFocus: setAddressIsFocus, showValidity: addressIsValid} = useFormValidation( (value) => value.length > 0 )
    const {value: city ,setValue: setCity, setIsFocus: setCityIsFocus, showValidity: cityIsValid} = useFormValidation( (value) => value.length > 0 );
    const {value: experience ,setValue: setExperience, setIsFocus: setExperienceIsFocus, showValidity: experienceIsValid} = useFormValidation( (value) => value >= 0 && value );

    // CUSTOM HOOK FOR FETCH
    const {sendRequest, isLoading, isValid, setError, error, setIsValid} = useFetch()

    const [cookies, setCookie, removeCookie] = useCookies();

    const router = useRouter();

    // CHECKING FOR USER PROFILE ON MOUNT 
    const userProfile = useSelector(state => state.userProfile);

    React.useEffect(() => { 
        if (!cookies.userProfile) {
            router.push('/action')
        } 

        return
        
    }, [])

    // IMAGE UPLOAD HANDLER
    function teamPhotosHandler (e) {
    
        if (e.target.files.length === 0) return setError("Please upload Team Member photos")

        let tmPhoto = []
        for (let i = 0; i < 3; i++) {
            if (!e.target.files[i]) continue
            tmPhoto.push(e.target.files[i])
        }

        setTeamPhotos(tmPhoto)
    }

    function businessPhotosHandler (e) {
        if (e.target.files.length === 0) return setError("Please upload your business photos")

        let busPhotos = []
        for (let i = 0; i < 6; i++) {
            if (!e.target.files[i]) continue
            busPhotos.push(e.target.files[i])
        }
        setTBusinessPhotos(busPhotos)

    }

    // CORDINATES CHANGE HANDLER
    function onCordinatesChange (coordinatesObj) {
        setLocationCoords([coordinatesObj.longitude, coordinatesObj.latitude])
    } 



    // HANDLING THE DELETE EVENT OF PRODUCT FORM
    React.useEffect(() => {
        console.log(deleteNumber)
        setAdd((prevState) => prevState.filter((item, index) => index !== deleteNumber))
        setDeleteNumber(null)
    }, [deleteNumber])


    // HANDLING THE DATA OF MULTIPLE PRODUCT FORM
    React.useEffect(() => {
        const index = serviceDetailObj?.index 
        
        const formatedServiceObj = {
            title: serviceDetailObj.data.title,
            description: serviceDetailObj.data.description,
            price: serviceDetailObj.data.price
        }
        serviceDetailArray[serviceDetailObj.index] = formatedServiceObj

        setServiceDetailArray(serviceDetailArray)

    }, [serviceDetailObj])


    
    // HANDLING THE "ADD ONE MORE" OF PRODUCT FORM
    function AddClickHandler (e) {
        e.preventDefault()
        setAdd((prevState) => [...prevState, prevState + 1])

    }


    // HANDLING THE SUBMIT FORM
    async function submitForm (e) {

        const location = {
            type: "Point",
            coordinates: locationCoords,
            city: city,
            address: address
        }

        e.preventDefault()
        const data = new FormData()

        data.append("name", name);
        // data.append(date, Date.now);
  
        data.append("contactNumber", contactNumber);
        data.append("experience", experience)
        data.append("services", JSON.stringify(serviceDetailArray));
        data.append("location", JSON.stringify(location));
        data.append("owner", userProfile.id)

        businessPhotos.forEach((file, index) => {
            data.append("photos", file)
        })

        teamPhotos.forEach((file, index) => {
            data.append("teamPhotos", file)
        })

        const response = await sendRequest("http://localhost:1000/api/v1/vendor", "POST", data, true)
        console.log(response)
        if (response?.message === "Successfully submitted") {
            setSuccess(response.message)
            setError(null)
        } else {
            setError(response.message)
            setSuccess(null)
        }
    }


    return (
        <form>
            <div className={nameIsValid ? styles.formControlContainer : styles.formControlContainer_error}>
                <label htmlFor="name">  Business Name </label>
                <input type="text" placeholder="Type your business name here..." id="name"  onChange={(e) => setName(e.target.value)} onFocus={() => setNameIsFocus(true)} onBlur={() => setNameIsFocus(false)} />
            </div>

            <div className={experienceIsValid ? styles.formControlContainer : styles.formControlContainer_error}>
                <label htmlFor="experience"> Experience (in years) </label>
                <input type="text"  id="experience" name="experience"  placeholder="for example, 3. Type 1, if you are new to the business" onChange={(e) => setExperience(e.target.value)} onFocus={() => setExperienceIsFocus(true)} onBlur={() => setExperienceIsFocus(false)}  />     
             </div>

            <div className={numberIsValid ? styles.formControlContainer : styles.formControlContainer_error}>
                <label htmlFor="phone"> Contact Number </label>
                <input type="tel"  id="phone" name="phone"   pattern="[0-9]{4}-[0-9]{9}" placeholder="for example: 0331-1234432"  onChange={(e) => setNumber(e.target.value)} onFocus={() => setNumberIsFocus(true)} onBlur={() => setNumberIsFocus(false)} />     
             </div>

             <div className={addressIsValid ? styles.formControlContainer : styles.formControlContainer_error}>
                <label htmlFor="address"> Address </label>
                <input type="text"  id="Address" name="Address"  placeholder="for example: Street 12, Badar Commercial, DHA Phase 2, Karachi" onChange={(e) => setAddress(e.target.value)} onFocus={() => setAddressIsFocus(true)} onBlur={() => setAddressIsFocus(false)}  />     
             </div>

             <div className={cityIsValid ? styles.formControlContainer : styles.formControlContainer_error}>
                <label htmlFor="city"> City </label>
                <input type="text"  id="city" name="city"  placeholder="Karachi" onChange={(e) => setCity(e.target.value)} onFocus={() => setCityIsFocus(true)} onBlur={() => setCityIsFocus(false)}  />     
             </div>

             <div className={styles.formControlContainer}>
                 <label>Business Location</label>

                <div className={styles.mapBox}>
                    <ControllableMap onCordinatesChange={onCordinatesChange} />
                </div>
             </div>

             <div className={styles.formControlContainer} ref={serviceDetailContainerRef}>
                <label> Services </label>

                {add.map( (val, k) =>  <ServiceDetailForm key={val} number={k+1} deleteIndex={setDeleteNumber} setServiceDetailObj={setServiceDetailObj} /> )}
                
                <button onClick={AddClickHandler} className={styles.addButton}  >Add More Service</button>
             </div>

             <div className={styles.formControlContainer}>
                <label htmlFor="teamimage"> Photos of Team Members (maximum: 3) </label>
                <input type="file"  id="teamimage" name="teamimage"  multiple="multiple" accept="image/jpg, image/jpeg, image/png"  onChange={teamPhotosHandler} />     
             </div>


             
             <div className={styles.formControlContainer}>
                <label htmlFor="businessimage"> Photos of Business (maximum: 6) </label>
                <input type="file"  id="businessimage" name="businessimage"  multiple="multiple" accept="image/jpg, image/jpeg, image/png"   onChange={businessPhotosHandler} />     
             </div>


             
            {error && 
             <div className={styles.formControlContainer}>
                 <p className={styles.errorMessage}>{error}</p>
             </div>
            }
            
            {success && 
             <div className={styles.formControlContainer}>
                 <p className={styles.successMessage}>{success}</p>
             </div>
            }

             <div className={styles.formControlContainer}>
                <button className={styles.submitButton} onClick={submitForm}  >Submit</button>
             </div>
        </form>
    )
}