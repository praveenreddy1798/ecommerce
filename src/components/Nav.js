import React from 'react'
import {Link} from 'react-router-dom'
import { BsFillBagFill } from "react-icons/bs";
import{useSelector} from 'react-redux'
const Nav = () => {
    const {totalQuantities} = useSelector(state=>state.CartReducer)
    return (
        <div className="nav">
            <div className="container">
                <div className="nav_container">
                   
                    <div className="nav_left">
                    <Link to="/">
                       <img src="/images/logo.jpg" alt="logo-image"/>
                       </Link>
                    </div>
                    
                    <div className="nav_right">
                        <Link to ="/cart">
                        <div className="basket">
                        <BsFillBagFill className="cart-icon" />
                        <span>{totalQuantities}</span>
                        </div>
                        </Link>
                    </div>
                </div>
            </div>

            
        </div>
    )
}

export default Nav
