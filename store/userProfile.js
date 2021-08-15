import {createSlice} from "@reduxjs/toolkit";
import { useCookies } from 'react-cookie';




const initialState = {
    googleUser: false,
    login: false,
    name: "",
    id: "",
    email:  "",
    photo: "",

}

const userProfileSlice = createSlice({
    name: "userProfile",
    initialState: initialState,
    reducers: {
        login (state, action) {

            console.log(action.payload, "YESSSSSSSSSSSSSSSSSSSSSSSSSSSSS")
            return {
                ...action.payload,
                login: true
            }
        }
    }
})



export default userProfileSlice.reducer;
export const userProfileActions = userProfileSlice.actions