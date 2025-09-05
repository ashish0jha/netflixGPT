import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {onAuthStateChanged, signOut} from "firebase/auth";
import {auth} from "../utils/firebase"
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";

const Header = () => {
  const user=useSelector((store)=>store.user);
  const navigate=useNavigate();

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
    <div className="absolute w-full z-50 px-[110px] py-2 bg-gradient-to-b from-black flex text-white justify-between">
        <div>
            <img 
            className="w-44"
            src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo"/>
        </div>
        {user && <div className="flex justify-center items-center">
            <div className="flex flex-col items-center">
              <img 
              src={user.photoURL}
              className="w-10 h-9 rounded-sm"
              alt="User Profile"
              />
              <p>{user.displayName}</p>
            </div>
            
            <button 
            className="m-2 px-3 rounded-md font-semibold py-1 bg-red-600"
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