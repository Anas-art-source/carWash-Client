import React from "react";
import styles from './Login.module.css'
import PasswordInput from "../utils/PasswordInput"
import { TextField } from "@material-ui/core";
import Image from 'next/image';
import loginVector from '../../public/4860253.jpg';
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import {useRouter} from 'next/router';
import {GoogleLogin} from "react-google-login";
import useFetch from '../hook/useFetch';
import {useDispatch} from "react-redux";
import {userProfileActions} from '../../store/userProfile';
import {useCookies} from "react-cookie"
 
const clientId = "479017269985-e8du6ocnp23pb562of83089ejcq2s6kk.apps.googleusercontent.com"
const clientSecret = "3hdt4fbIwcL9PpYtidkDrDHS"

export default function Login (props) {
    const [login, setLogin] = React.useState(false)
    const router = useRouter();
    const {sendRequest, isLoading, isValid, setError, error, setIsValid} = useFetch();
    const dispatch = useDispatch();

    const [name, setName] = React.useState("")
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [passwordConfirm, setPasswordConfirm] = React.useState('')
    const [photo, setPhoto] = React.useState()
    
    const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);
    

   

    function photoUploadHandler (e) {
        setPhoto(e.target.files[0])
    }

    const responseGoogle = async (res) => {
        
        const {profileObj} = res
        console.log(profileObj)

        const data = {
            name: profileObj.name,
            email: profileObj.email,
            photo: profileObj.imageUrl
        }

        // MAKE API POST CALL HERE
        const response = await sendRequest('http://localhost:1000/api/v1/google', "POST", data, false);

        if (response?.message === "successful") {
            dispatch(userProfileActions.login({...response.data, googleUser: true}))
            setCookie("userProfile", {...response.data, googleUser: true})


        }

        router.back()

    }   

    async function onSubmit (e) {
        e.preventDefault()

        if (login) {

            const loginFormData = {
                email: email,
                password: password
            }


            const response = await sendRequest("http://localhost:1000/api/v1/users/login", "POST", loginFormData, false);

            if (response?.message === 'successful') {
                dispatch(userProfileActions.login({...response.data, googleUser: false}))
                setCookie("userProfile", {...response.data, googleUser: false})
                router.back()

            } else {
                setError(response.message)
            }
           
        }

        if (!login) {
            
            const signupData = new FormData();

            signupData.append("name", name);
            signupData.append("email", email);
            signupData.append("password", password);
            signupData.append("passwordConfirm", passwordConfirm);
            signupData.append("photo", photo);

            const response = await sendRequest("http://localhost:1000/api/v1/users/signup", "POST", signupData, true)

            if (response?.message === 'successful') {
                dispatch(userProfileActions.login({...response.data, googleUser: false}))
                setCookie("userProfile",{...response.data, googleUser: false})

                router.back()


            } else {
                setError(response.message)
            }

        }

    }

    return (
        <div className={styles.loginSection}>

          <div className={styles.actionContainer}>

              <div className={styles.imageContainer}>
                 <Image 
                  src={loginVector}
                  alt="Login"
                 width={1000}
                  height={900}
                  objectFit="cover"
                    />
              </div>

            <div className={styles.loginContainer}>
                <h3>{login ? "LOG IN" : "SIGN UP"}</h3>

                <form>
                    {error && 
                    <div className={styles.formBox}>
                        <p className={styles.errorMessage}>{error}</p>
                    </div>
                    }

                    {!login && 
                    <div className={styles.formBox}>
                        <TextField type="text"  label="Name" onChange={(e) => setName(e.target.value)} />
                    </div>
                    }

                    <div className={styles.formBox}>
                        <TextField type="email"  label="Email" onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div className={styles.formBox}>
                        <PasswordInput style={styles.password} label="Password" onChange={setPassword} />
                    </div>

                    {!login && 
                    <div className={styles.formBox}>
                        <PasswordInput style={styles.password} label="Confirm Password" onChange={setPasswordConfirm} />
                    </div>
                    }


                    {!login && 
                    <div className={styles.formBox}>
                        <label>Profile Picture</label>
                        <input type="file" single  onChange={photoUploadHandler} />
                    </div>
                    }


                    <div className={styles.formBox}>
                        <button className={styles.btnSubmit} onClick={onSubmit} >{login ? "Log In" : "Sign Up"}</button>
                    </div>

                    <div className={styles.formBox}>
                        <p>{login ? "Dont have an account? ": "Already have an account? " } <span onClick={() => setLogin((prevState) => !prevState)} className={styles.redirect}>{login ? "Sign Up" : "Log In"}</span></p>
                    </div>

                    <div className={styles.formBox}>
                    <GoogleLogin
                    clientId={clientId}
                    buttonText="Login with Google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy="single_host_origin"
                    className={styles.googleLogin}
                        />

                        
                        {/* <button className={styles.btnGoogle}>
                                <FcGoogle className={styles.googleIcon}/> Sign In with Google
                        </button> */}
                    </div>
                    

                    
                </form>

            </div>
        </div>  

        </div>
    )
}