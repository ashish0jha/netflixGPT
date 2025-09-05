import Header from "./Header";
import { useState , useRef } from "react";
import {checkValidation} from "../utils/validate";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword ,updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Home = () => {
  const [loginbtn,setloginbtn]=useState(true);
  const [signup,setsignup]=useState(false);

  const dispatch=useDispatch();

  const [Validationmsg,setValidationmsg]=useState();

  const name=useRef(null);
  const email=useRef(null);
  const password=useRef(null);

  const clickHandler=()=>{
    
    let check;
    if(name.current){
      check=checkValidation(name.current.value,email.current.value,password.current.value);
    }else{
      check=checkValidation(null,email.current.value,password.current.value);
    }
    setValidationmsg(check);
    if(check) return;

    //For Sign Up (Creating users Account )

    if(signup){
      createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"

          }).then(() => {
            const {uid,email,displayName,photoURL} = auth.currentUser;
            dispatch(
              addUser({
                uid:uid,
                email:email,
                displayName:displayName,
                photoURL:photoURL
              }))
          }).catch((error) => {
            setValidationmsg(error.message);
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setValidationmsg(errorCode+" "+errorMessage);
      });

    }
    //signing in
    else{
      signInWithEmailAndPassword(auth,email.current.value,password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setValidationmsg(errorCode+" "+errorMessage);
      });
    }

  }
  return (

    <div>
        <Header/>
        <div>
            <img
            src="https://assets.nflxext.com/ffe/siteui/vlv3/cb72daa5-bd8d-408b-b949-1eaef000c377/web/IN-en-20250825-TRIFECTA-perspective_a3209894-0b01-4ddb-b57e-f32165e20a3f_large.jpg" 
            alt="bg"
            className="brightness-[26%]"
            />
        </div>
        <div>
            {
              loginbtn===true 
              ? <div  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <h1 className="font-bold text-white text-6xl text-center">Unlimited movies ,TV shows and more</h1>
                  <h3 className="font-semibold text-white text-center my-6 text-2xl">Starts at ₹149. Cancel at any time.</h3>
                  <p className="text-white text-lg">Ready to watch? Enter your email to create or restart your membership.</p>
                  <button className="m-2 p-8 py-3 rounded-md font-semibold bg-red-600 hover:bg-red-700 text-white text-2xl"
                  onClick={()=>{
                    setloginbtn(false);
                  }}>Get Started</button>
              </div>
              : <div >
                  
                  <form  onSubmit={(e)=>e.preventDefault()} className="absolute top-1/4 left-1/3 w-3/12 flex flex-col p-10 bg-black bg-opacity-70 rounded-lg">
                      <h1 className="text-3xl font-bold text-white m-4">{signup ? "Sign UP" : "Sign In"}</h1>
                      {signup && <input 
                      ref={name}
                      type="text" 
                      placeholder="Name" 
                      className="p-3 m-3 text-white font-semibold bg-transparent border border-y-white rounded-md bg-gray-900 bg-opacity-20"/>}

                    <input 
                      ref={email}
                      type="text" 
                      placeholder="Email or mobile number" 
                      className="p-3 m-3 text-white font-semibold bg-transparent border border-y-white rounded-md bg-gray-900 bg-opacity-20"/>


                    <input 
                      ref={password}
                      type="password" 
                      placeholder="Password" 
                      className="p-3 m-3 text-white font-semibold bg-transparent border border-y-white rounded-md bg-gray-900 bg-opacity-20"/>

                    <p className="text-red-600 font-bold mx-3">{Validationmsg}</p>

                    <button className="m-3 px-3 rounded-md font-semibold py-1 bg-red-600 text-white"
                    onClick={clickHandler}>{signup ? "Sign UP" : "Sign In"}</button>

                    <p 
                    className="text-white text-lg p-0 m-3 cursor-pointer"
                    onClick={()=>{
                      setsignup(!signup)
                    }}>{signup ? "Already have an Account? click to Sign In" : "New to Netflix? Sign up now."}</p>

                  </form>
                  
              </div>
            }
            
        </div>
    </div>
  )
}

export default Home 