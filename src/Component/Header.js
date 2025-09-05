import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {onAuthStateChanged, signOut} from "firebase/auth";
import {auth} from "../utils/firebase"
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect, useState } from "react";
import { logo } from "../utils/constants";

const Header = () => {
  const Currentuser=useSelector((store)=>store.user);
  const navigate=useNavigate();
  const [profilename,setprofilename]=useState(false);
  if(profilename){
    setTimeout(()=>{
      setprofilename(false);
    },2000)
  }

  const dispatch=useDispatch();

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
    <div className="absolute w-full z-10 pl-[110px] py-2 bg-gradient-to-b from-black flex text-white justify-between">
        <div className="flex items-center">
            <img 
            className="w-44 mr-16"
            src={logo} alt="logo"/>

            <ul className="text-lg flex gap-10">
              <li>Home</li>
              <li>Shows</li>
              <li>Movies</li>
              <li>Games</li>
            </ul>
        </div>
        {Currentuser && <div className="flex justify-center items-center">
            <div className="flex flex-col items-center">
              <img 
              src={Currentuser.photoURL}
              className="w-10 h-9 rounded-sm"
              alt="User Profile"
              onClick={()=>{
                setprofilename(true);
              }}
              />
              
              {profilename && <p>{Currentuser.displayName}</p>}
            </div>
            
            <button 
            className="m-4 px-3 rounded-md font-semibold py-1 bg-red-600"
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