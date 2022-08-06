import './Auth.css'
import Auth2 from './Auth2';
import React, { useState } from 'react';



function Auth(){
    const[show,setShow] = useState(false)
   function  dekh(){
        setShow(true)
    }

    return(<div className='auth'>
    <div className='auhead'>
        <p></p>
        <p>Login</p>
    </div>
    <hr/>
    <div>
        <input required min={0} className='num' id='num1' type={"number"} placeholder="Enter phone" />
        {
            show?<Auth2/>:null
        }
        <button id='subau' onClick={dekh}>Get Otp</button>
        <div id='willy'>Will do later</div>
        <div className='hid'>
            Click on back button
        </div>

    </div>
    </div>
    )

}


export default Auth;