import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {onAuthStateChanged, signOut} from "firebase/auth";
import {auth} from "../utils/firebase"
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect, useState } from "react";
import { logo, supported_lang } from "../utils/constants";
import { toggleGptbtn } from "../utils/StatesSlice";
import { ChangeLang } from "../utils/langConfigSlice";

const Header = () => {
  const Currentuser=useSelector((store)=>store.user);
  const navigate=useNavigate();
  const [profilename,setprofilename]=useState(false);
  const searchtomovies=useSelector((store)=>store.States.GptPagebtn);
  const dispatch=useDispatch();

  if(profilename){
    setTimeout(()=>{
      setprofilename(false);
    },2000)
  }

  const LangChangeHandler=(e)=>{
      dispatch(ChangeLang(e.target.value));
  }

  

  useEffect(()=>{
      const unsubscribe=onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid,email,displayName,photoURL} = user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
        navigate("/Browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    //unsubscribing the onAuthStateChanged when component is unmounted.
    return ()=>{unsubscribe()};
  },[])

  return (
    <div className="absolute w-full z-50 md:pl-[110px] py-2 bg-gradient-to-b from-black flex flex-wrap text-white justify-between overflow-hidden">
        <div className="flex items-center flex-wrap">
            <img 
            className="w-44 md:mr-16 mx-auto"
            src={logo} alt="logo"/>

          {Currentuser && <ul className="text-lg flex justify-center items-center gap-1 cursor-pointer">
            <li className="hover:bg-gray-500 hover:bg-opacity-30 px-3 py-2 rounded-3xl">Home</li>
            <li className="hover:bg-gray-500 hover:bg-opacity-30 px-3 py-2 rounded-3xl">Shows</li>
            <li className="hover:bg-gray-500 hover:bg-opacity-30 px-3 py-2 rounded-3xl">Games</li>
            <button 
              className="hover:bg-gray-500 hover:bg-opacity-30 px-3 py-2 rounded-3xl"
              onClick={()=>{
                dispatch(toggleGptbtn())
              }}>{searchtomovies ? "Movies" : "GPTSearch"}
            </button>
          </ul>}
        </div>
        
        
        {!Currentuser && <select 
          name="Language" 
          id="multiple" 
          className="text-black w-28 p-2 m-4 rounded-md"
          onChange={LangChangeHandler}>
          {supported_lang.map((lang)=><option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
        </select>}
        

        {Currentuser && <div className="flex justify-center items-center">
            <div className="flex flex-col items-center cursor-pointer">
              <img 
              src={Currentuser.photoURL}
              className="w-10 h-9 rounded-sm hidden md:inline-block "
              alt="User Profile"
              onClick={()=>{
                setprofilename(true);
              }}
              />
              
              {profilename && <p>{Currentuser.displayName}</p>}
            </div>
            
            <button 
            className="hidden md:inline-block m-4 px-3 rounded-md font-semibold py-1 bg-red-600"
            onClick={()=>{
              signOut(auth).then(() => {
                  // Sign-out successful.

                }).catch((error) => {
                  // An error happened.
                });
            }}
            >Sign Out</button> 
        </div>}
        
    </div>
  )
}

export default Header