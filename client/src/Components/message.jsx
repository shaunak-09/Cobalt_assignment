import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import {taost, toast} from 'react-toastify'


function Message() {
    const [slackToken, setSlackToken] = useState(null);
    const [channel_name, setChannel_name] = useState('general');
    const {token}=useParams();
    useEffect(() => {
        if(token && token !== 'undefined')
        localStorage.setItem('slackToken', token);
        const parseCookies = (cookieString) => {
            return cookieString.split('; ').reduce((acc, cookie) => {
              const [name, value] = cookie.split('=');
              acc[name] = decodeURIComponent(value);
              return acc;
            }, {});
          };
      
          // Get all cookies
          const cookies = parseCookies(document.cookie);
      
          // Check if 'userProfile' cookie exists
          if(cookies.slackToken){
            const slackTokenData = JSON.parse(cookies.slackToken);
            console.log(slackTokenData);
            setSlackToken(slackTokenData);
          }

    
    }, [])

    const handleMessage=async()=>{
        try{
        console.log(token,channel_name);
        const slackToken=localStorage.getItem('slackToken');
        const res=await axios.post('http://localhost:8000/api/slack/msg',{
            "token":slackToken,
            "channel_name":channel_name
        },{
            credentials: 'include'
        })
        console.log(res);
        toast.success("Message Sent!");
    }
    catch(err){
        console.log(err);
        toast.error("Error Sending Message!");
    }

    }
    
  return (
    <div>
        <input type="text" placeholder="Enter Channel Name" onChange={(e)=>setChannel_name(e.target.value)} className="border-2 border-gray-500 p-2 m-2"/>
        <button onClick={handleMessage} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Send Message</button>
    </div>
  )
}

export default Message
