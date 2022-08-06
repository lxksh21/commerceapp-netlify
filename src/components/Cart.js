import React from "react";
// import Body1 from "./Body1";
import imag0 from './images/a.jpeg'
import './Cart.css'

function Cart(){
    const menu = [{
        image : imag0,
        title : "Mom's style Ajwain Prantha",
        price : 60,
        info: "Ajwain has such a tantalising aroma and flavour that it can pep up a dish as a standalone spice"}
    ]
    return(
        <div id="carbo">
            <div >
                <h2 id="carhead">Cart Details</h2>
                <hr/>

                <div id="item">
                <img src={menu[0].image} alt='item1' id='item1'/>
            <h4 style={{margin:"auto"}}>{menu[0].title}</h4><div id="finamt">10 <b>x</b> ₹1 <b>=</b> ₹1</div>
            </div>
                <hr/>
                
            </div>

        </div>
    )

}


export default Cart;