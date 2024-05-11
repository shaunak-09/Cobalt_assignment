import React from 'react'
import axios from 'axios'
import GoogleButton from 'react-google-button'
import  {server}  from '../config'



function Login() {
  return (
    <div className=" flex justify-center items-center h-[20vh]">
        <a href="http://localhost:8000/api/auth/google">
        <GoogleButton
  type="dark" // can be light or dark
//   onClick={handleSubmit}
/>
        </a>
   
    </div>
  )
}

export default Login