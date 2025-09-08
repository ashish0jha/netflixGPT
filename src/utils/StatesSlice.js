import { createSlice } from "@reduxjs/toolkit";

const StatesSlice=createSlice({
    name:"States",
    initialState:{
        GptPagebtn:false,
    },
    reducers:{
        toggleGptbtn:(state)=>{
            state.GptPagebtn=(!state.GptPagebtn)
        }
    }
})

export const {toggleGptbtn}=StatesSlice.actions;

export default StatesSlice.reducer;