import {configureStore} from "@reduxjs/toolkit"
import userProfileReducers from './userProfile'


const store = configureStore({
    reducer: {
        userProfile: userProfileReducers
    }
})


export default store;