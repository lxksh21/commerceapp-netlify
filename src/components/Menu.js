import Body1 from '../components/Body1';
import imag0 from '../components/images/a.jpeg'
import imag1 from '../components/images/j.jpeg'
import imag2 from '../components/images/t.jpeg'
import React from 'react';

function Menu(){

  const menu = [{
    image : imag0,
    title : "Mom's style Ajwain Prantha",
    price : 60,
    info: "Ajwain has such a tantalising aroma and flavour that it can pep up a dish as a standalone spice"},
    {
      image: imag1,
      title:"Roasted Cereal - Wheat Jowar Bajra",
      price:55,
      info:"Roasted cereal"
    },
    {
      image : imag2,
    title : "Turmeric",
    price : 50,
    info: "Good for medicinal purposes"},
  ]

  return(
    <div>
    <h1 id='ele1'> MENU</h1>
    <Body1 image={menu[0].image} title={menu[0].title} amount={menu[0].price} info={menu[0].info}></Body1>
    <Body1 image={menu[1].image} title={menu[1].title} amount={menu[1].price} info={menu[1].info}></Body1>
    <Body1 image={menu[2].image} title={menu[2].title} amount={menu[2].price}info={menu[2].info}></Body1>
    <Body1 image={menu[0].image} title={menu[0].title} amount={menu[0].price} info={menu[0].info}></Body1>
    <Body1 image={menu[1].image} title={menu[1].title} amount={menu[1].price} info={menu[1].info}></Body1>
    <Body1 image={menu[2].image} title={menu[2].title} amount={menu[2].price}info={menu[2].info}></Body1>
    <Body1 image={menu[0].image} title={menu[0].title} amount={menu[0].price} info={menu[0].info}></Body1>
    <Body1 image={menu[1].image} title={menu[1].title} amount={menu[1].price} info={menu[1].info}></Body1>
    <Body1 image={menu[2].image} title={menu[2].title} amount={menu[2].price}info={menu[2].info}></Body1>
    </div>
  )
}

export default Menu;