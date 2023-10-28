import React, { useState } from 'react'
import './LoginSignup.css'

import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'

export const LoginSignup = () => {

    const [action,setAction] = useState("Login")

  return (
    <div className='container'>
        <div className='header'>
            <div className='text'>{action}</div>
            <div className='underline'></div>
        </div>
        <div className='inputs'>
            <div className='input'>
                <img src={user_icon} alt=''/>
                <input type='text' placeholder='Name'/>
            </div>
            <div className='input'>
                <img src={email_icon} alt=''/>
                <input type='email' placeholder='Email'/>
            </div>
            <div className='input'>
                <img src={password_icon} alt=''/>
                <input type='password' placeholder='Password'/>
            </div>
        </div>
        <div className="forgot-password">Forgot Password? <span>Click Here</span></div>
        <div className="submit-container">
            <div className={action==="Login"?"submit":"submit gray"} onClick={() => setAction("Login")}>Login</div>
            <div className={action==="Demo User"?"submit":"submit gray"} onClick={() => setAction("Demo User")}>Demo User</div>
        </div>    
    </div>
  )
}

export default LoginSignup