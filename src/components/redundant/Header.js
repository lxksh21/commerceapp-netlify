import './Header.css'
import {FaOpencart,FaShoppingBag} from 'react-icons/fa'

function Header() {
    
    return <div className='head'>
        {/* <img src={require('./4.png')} id='logo' className='item' alt="logio"></img> */}
        <p id='logo'><FaShoppingBag />Ecommerce</p>
        <FaOpencart id='cart' className='item'/>
    </div>
}



export default Header; 