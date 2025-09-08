import { createSlice } from "@reduxjs/toolkit";

const moviesSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        popularmovies:null,
        toprated:null,
        upcomingMovies:null,
        
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
        addUpcomingMovies:(state,action)=>{
            state.upcomingMovies=action.payload;
        },
    },
})

export const {addnowPlayingMovies,addPopularMovies,addToprated,addUpcomingMovies} = moviesSlice.actions;

export default moviesSlice.reducer;