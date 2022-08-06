import './Footer.css'
import React from 'react';
import { useState } from "react";
import Auth from './Auth'
import Cart from './Cart';
import { FaArrowCircleRight } from 'react-icons/fa'
import { FaLongArrowAltUp } from 'react-icons/fa'
import {FaHome} from'react-icons/fa'

function Footer(){
    const [show,setShow]=useState(false)
    const [show1,setShow1]=useState(false)
    function home(){
      setShow(false)
      setShow1(false)
    }
    return (
    <div>
      {
        show1?<Cart/>:null
      }
         {
       show?<Auth/>:null
     }
        <div className='foot'>
        <button id= 'foot2'  onClick={()=>setShow1(true)} >Cart <FaLongArrowAltUp className='arrow'/><span id='itemno'>10</span></button>
        <p id='foot1' onClick={()=>setShow(true)}>Continue <FaArrowCircleRight className='arrow'/></p>
        <button onClick={home} id='home'><FaHome/></button>
        </div>
    </div>)
}


export default Footer