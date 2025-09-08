import { createSlice } from "@reduxjs/toolkit";

const langConfigSlice=createSlice({
    name:"langConfig",
    initialState:{
        configurelang:"en",
    },
    reducers:{
        ChangeLang:(state,action)=>{
            state.configurelang=action.payload;
        },
    },
})
export const {ChangeLang}=langConfigSlice.actions;
export default langConfigSlice.reducer;