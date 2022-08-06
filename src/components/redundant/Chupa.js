import { useState } from "react";
import Checkout from '../Checkout'
function Chupa(){
    const [show,setShow]=useState(true)
  return (
    <div className="App">
     {
      //  show?<h1>Hello World !</h1>:null
       show?<Checkout/>:null
     }
      <button onClick={()=>setShow(true)} >Show</button>
     <button onClick={()=>setShow(false)} >Hide</button> 
    </div>
  );
}

export default Chupa;