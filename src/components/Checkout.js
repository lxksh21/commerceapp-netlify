import './Checkout.css'
import imag0 from './images/a.jpeg'
import React from 'react';

function Checkout(props){
    const menu = [{
        image : imag0,
        title : "Mom's style Ajwain Prantha",
        price : 60,
        info: "Ajwain has such a tantalising aroma and flavour that it can pep up a dish as a standalone spice"}
    ]
    function goo(){
        alert("Order Confirmed")
    }
    return(
        <div id='check'>
            <div id='head2'>
                
                <h2 >Checkout</h2>
            </div>
            <hr/>
            <div id='pick'>
                <span >Pickup</span>
                <hr/>
                <h3>Test</h3>
                <span id='pata'>Daalchini Office Noida Uttar Pradesh </span>
                <span id='expire'>Order expires in 30 minutes</span>
            </div>
            <div>
                <span id='pick'>Cart Details</span>
                <hr/>
                <div id="item">
                <img src={menu[0].image} alt='item1' id='item1'/>
            <h4 style={{margin:"auto"}}>{menu[0].title}</h4><div id="finamt">10 <b>x</b> ₹1 <b>=</b> ₹1</div>
            </div>
                <hr/>
                
            </div>
            <div id='tot'><span>Total : <b><em>₹10</em></b></span><span>{props.amount}</span></div>
            <div id='firm'><button onClick={goo} id='firm1' >Submit</button></div>
        </div>
    )

}


export default Checkout;