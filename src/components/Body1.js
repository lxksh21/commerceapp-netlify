// import { getValue } from '@testing-library/user-event/dist/utils';
import React from 'react';
import './Body1.css'
// import item1 from './images/item1.jpeg'

function Body1(props){
    function plus(event){
        const i = 0
        console.log(i)
    }
    return (<div className='par'>
        <div className='l1'>
            <img src={props.image} alt='item1' id='item1'/>
            <div className='detail'>{props.title}<p className='info'>{props.info}</p><p className='amount'>₹{props.amount}</p></div>
            <div id='noi'><input type={'number'}
          onChange={plus} min="0" max='10' id='nnoi' defaultValue={0}/><button id='addb'>ADD</button>
          </div>
        </div>
        
    </div> )   
}

export default Body1;






// function Body1(){

    // const title = 'carb diet';
    
    // return <div className='l1'>
    //     <h3>{title}</h3>
    // </div>

    // return <div className='l1'>
    //     <img src={item1} alt='item1' id='item1'/>
    //     <div className='detail'>Carbohydrates Diet Plan
    //         <p className='info'>Carbs are the bodys main source of energy and should make up half of your daily calorie requirement. However, its important to choose the right type of carbs. u</p>
    //         <div className='amount' id='actamt'>₹ 1 <p className='old'>₹ 50</p></div>    
    //     </div>
    //     {/* button */}
    // </div>
// }
