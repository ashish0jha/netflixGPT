import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./movieSlice";
import StatesReducer from "./StatesSlice";
import langConfigReducer from "./langConfigSlice"

const appStore=configureStore({
    reducer:{
        user:userReducer,
        movies:moviesReducer,
        States:StatesReducer,
        langConfig:langConfigReducer,
    }
})

export default appStore;