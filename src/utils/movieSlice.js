import { createSlice } from "@reduxjs/toolkit";


const moviesSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        popularmovies:null,
        toprated:null,
        
    },
    reducers:{
        addnowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload;
        },
        addPopularMovies:(state,action)=>{
            state.popularmovies=action.payload;
        },
        addToprated:(state,action)=>{
            state.toprated=action.payload;
        },
    },
})

export const {addnowPlayingMovies,addPopularMovies,addToprated} = moviesSlice.actions;

export default moviesSlice.reducer;