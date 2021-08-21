import {configureStore} from "@reduxjs/toolkit"
import userProfileReducers from './userProfile'
import socketReducer from './socket'

const store = configureStore({
    reducer: {
        userProfile: userProfileReducers,
        socket: socketReducer
    }
})


export default store;