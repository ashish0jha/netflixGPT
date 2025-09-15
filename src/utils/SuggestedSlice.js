import { createSlice } from "@reduxjs/toolkit";

const SuggestedSlice=createSlice({
    name:"GPTSearchedMovie",
    initialState:{
        suggested:null,
    },
    reducers:{
        addSuggestedMovies:(state,action)=>{
            state.suggested=action.payload;
        }
    }
})

export const {addSuggestedMovies}=SuggestedSlice.actions;

export default SuggestedSlice.reducer;