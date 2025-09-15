import { createSlice } from "@reduxjs/toolkit";

const StatesSlice=createSlice({
    name:"States",
    initialState:{
        GptPagebtn:false,
        Loadingbtn:false,
    },
    reducers:{
        toggleGptbtn:(state)=>{
            state.GptPagebtn=(!state.GptPagebtn)
        },
        toggleGptLodingbtn:(state)=>{
            state.Loadingbtn=(!state.Loadingbtn)
        }
    }
})

export const {toggleGptbtn,toggleGptLodingbtn}=StatesSlice.actions;

export default StatesSlice.reducer;