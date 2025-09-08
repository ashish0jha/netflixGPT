import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./movieSlice";
import StatesReducer from "./StatesSlice";

const appStore=configureStore({
    reducer:{
        user:userReducer,
        movies:moviesReducer,
        States:StatesReducer,
    }
})

export default appStore;