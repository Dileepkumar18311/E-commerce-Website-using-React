import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import nav_dropdown from '../Assets/nav_dropdown.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {

    const [menu, setMenu] = useState("shop");
    const { getTotalCartItems } = useContext(ShopContext);
    const menuRef = useRef();

    const dropdown_toggle = (e) => {
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    }

    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="" />
               
                <Link to='/' style={{ textDecoration: 'none' }}>
                    <p>SCHOLARSTYLE</p>
                </Link>
            </div>
            <img onClick={dropdown_toggle} className='nav-dropdown' src={nav_dropdown} alt="" />
            <ul ref={menuRef} className="nav-menu">
                <li onClick={() => { setMenu("shop") }}><Link style={{ textDecoration: 'none' }} to='/'>Shop</Link>{menu === "shop" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("hoodie") }}><Link style={{ textDecoration: 'none' }} to='/hoodie'>Hoodie</Link>{menu === "hoodie" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("zipper") }}><Link style={{ textDecoration: 'none' }} to="zipper">Zipper</Link>{menu === "zipper" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("varsity") }}><Link style={{ textDecoration: 'none' }} to='/varsity'>Varsity</Link>{menu === "varsity" ? <hr /> : <></>}</li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'><img src={cart_icon} alt="" /></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
    )
}

export default Navbar
