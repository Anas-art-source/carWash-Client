import {createSlice} from "@reduxjs/toolkit";
import { useCookies } from 'react-cookie';
import { API_URL } from "../global.variable";



const initialState = {
    googleUser: false,
    login: false,
    name: "",
    id: "",
    email:  "",
    photo: `${API_URL}/photo/user/userBasicAvatar.jpg`,

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