import React from "react";
import { useState } from "react";
import Checkout from './Checkout'
import './Auth.css'
import { Link } from "react-router-dom";
function Auth2(){
    const[show,setShow] = useState(false)
        function hoe(){
            setShow(true)
        }
        return(
            
            <div>
            {
                show?<Checkout/>:null
            }
            <input type={"number"} className="num" id='num2' placeholder="Enter OTP"  />
            
           <Link to='/checkout'> <button id="subau" onClick={hoe}>Verify and Continue</button></Link>
            
        </div>
    )

}


export default Auth2;
