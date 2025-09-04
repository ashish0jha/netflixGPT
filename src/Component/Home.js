import Header from "./Header";
import { useState , useRef } from "react";
import {checkValidation} from "../utils/validate";

const Home = () => {
  const [loginbtn,setloginbtn]=useState(true);
  const [signup,setsignup]=useState(false);

  const [Validationmsg,setValidationmsg]=useState();

  const name=useRef(null);
  const email=useRef(null);
  const password=useRef(null);

  const clickHandler=()=>{
    
    let check;
    if(name.current){
      check=checkValidation(name.input.current.value,email.input.current.value,password.input.current.value);
    }else{
      check=checkValidation(null,email.current.value,password.current.value);
    }

    console.log(check);
    setValidationmsg(check);

  }
  return (

    <div>
        
        <Header clickHandler={()=>setloginbtn(false)}/>
        <div>
            <img
            src="https://assets.nflxext.com/ffe/siteui/vlv3/cb72daa5-bd8d-408b-b949-1eaef000c377/web/IN-en-20250825-TRIFECTA-perspective_a3209894-0b01-4ddb-b57e-f32165e20a3f_large.jpg" alt="bg"/>
        </div>
        <div>
            {
              loginbtn===true 
              ? <div  className="absolute top-1/4 left-1/3 w-5/12 flex flex-col items-center p-10 bg-black bg-opacity-70 rounded-lg">
                  <h1 className="font-bold text-white text-5xl text-center">Unlimited movies ,TV shows and more</h1>
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