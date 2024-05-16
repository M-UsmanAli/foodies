import { useState } from 'react'
import './LoginPopUp.css'
import { assets } from '../../assets/assets'

interface Props{
    setShowLogin:React.Dispatch<React.SetStateAction<boolean>>
}

const LoginPopUp = ({setShowLogin}:Props) => {
    const[currentState, setCurrentState]=useState("Login")
    return (
        <div className='login-popup'>
            <form className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currentState}</h2>
                    <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="login-popup-inputs">
                    {currentState==='Login'?<></>:<input type='text' placeholder='Your Name' required/>}
                    <input type='email' placeholder='Your Email' required/>
                    <input type='password' placeholder='Your Password' required/>
                </div>
                <button>{currentState==='Sign Up'?"Create Account":"Login"}</button>
                <div className="login-popup-condition">
                    <input type='checkbox' required/>
                    <p>Agree to Term and Condition</p>
                </div>
                {currentState==='Login'?<p>Create an Acount?<span onClick={()=>setCurrentState('Sign Up')}>Click Here</span></p>:
                <p>Already have an Acount?<span onClick={()=>setCurrentState('Login')}>Login Here</span></p>}
                
            </form>
        </div>
    )
}

export default LoginPopUp