import OpenAI from 'openai';
import { useEffect } from 'react';

const Check=()=>{
    useEffect(()=>{
        
    },[])
    
    const client = new OpenAI({
      apiKey: process.env.REACT_APP_GPT_KEY,
      dangerouslyAllowBrowser:true, 
    });
}


export default Check;