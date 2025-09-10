import { createSlice } from "@reduxjs/toolkit";
import { ActionCodeOperation } from "firebase/auth";

const StatesSlice=createSlice({
    name:"States",
    initialState:{
        GptPagebtn:false,
        Mutebtn:"Mute",
        muteLinkText:"",
    },
    reducers:{
        toggleGptbtn:(state)=>{
            state.GptPagebtn=(!state.GptPagebtn)
        },
        toggleMutebtn:(state,action)=>{
            state.Mutebtn=(state.Mutebtn==="Mute" ? "Unmute" : "Mute");
        },
        toggleMutetext:(state,action)=>{
            state.muteLinkText=(state.muteLinkText==="" ? "&mute=1" : "")
        }
    }
})

export const {toggleGptbtn , toggleMutebtn,toggleMutetext}=StatesSlice.actions;

export default StatesSlice.reducer;