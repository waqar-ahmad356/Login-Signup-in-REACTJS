import React, { useState } from 'react'
import './LoginSignup.css';
import email from '../Assets/email.png';
import password from '../Assets/password.png';
import person from '../Assets/person.png';

const LoginSignup = () => {
    const [action,setAction]=useState('Sign Up')
  return (
    <div className='container'>
    <div className='header'>
        <div className='text'>{action}</div>
        <div className='underline'></div>
    </div>
    <div className='inputs'>
    {action==="Log In"?<div></div>:<div className='input'>
        <img src={person} alt="" className='image'/>
            <input type='text' placeholder='Name'/>
        </div>}
        
        <div className='input'>
        <img src={email} alt="" className='image'/>
            <input type='email'placeholder='Email Id'/>
        </div>
        <div className='input'>
            <img src={password} alt="" className='image'/>
            <input type='password' placeholder='Password'/>
        </div>
    </div>
    {action==="Sign Up"?<div></div>:<div className='forget-password'>Lost Passoword ? <span>Click here!</span></div>}
    
    <div className='submit-container'>
        <div className={action==="Log In"?"submit gray":"submit"} onClick={()=>setAction("Sign Up")}>Sign Up</div>
        <div className={action==='Sign Up'?"submit gray":"submit"} onClick={()=>setAction('Log In')}>Log In</div>
    </div>
      
    </div>
  )
}

export default LoginSignup
