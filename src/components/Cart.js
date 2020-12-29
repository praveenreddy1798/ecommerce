import React from 'react'
import{useSelector,useDispatch} from "react-redux"
import {BsDash, BsPlus, BsFillBackspaceFill} from "react-icons/bs";
import currencyFormatter from "currency-formatter";
function Cart() {
    const{products,totalPrice,totalQuantities} = useSelector(state=>state.CartReducer)
    const dispatch = useDispatch()
    return (
        <div className="cart">
            <div className="container mtop-100 cart-responsive">
            <h3>Shopping Cart</h3>
            {products.length>0 ? <>
            <div className="row">
            <div className="col-9 ">
            <div className="cart-details vertical-align">
                <div className="row">
                    <div className="col-2">Picture</div>
                    <div className="col-2">Name</div>
                    <div className="col-2">Price</div>
                    <div className="col-2">Inc/Dec</div>
                    <div className="col-2">Total Price</div>
                    <div className="col-2">Remove</div>
                    </div>
                    </div>  
                    {products.map(product=>( 
                <div className="cart-product cart-responsive-full" key={product.id}>
                    <div className="row vertical-align">
                        <div className="col-2">
                <div className="cart-image text-left -ml-10 cart-responsive-image">
                <img src={`images/${product.image}`} alt=""/>
                </div>
            </div>
            <div className="col-2 -ml-10 ">
            <div className="cart-name text-left -ml-10 -ml-10 pr-6 cart-responsive-name">
                {product.name}
            </div>
            </div>
            <div className="col-2"> 
            <div className="cart-price text-left ml-10 cart-responsive"> 
            {currencyFormatter.format(product.discountPrice, {code: 'USD'})}
            </div>
            </div>
            <div className="col-2 cart-inc-dec"> 
            <div className="inc-dec text-left pl-5 ">
            <span className="dec" onClick={()=>dispatch({type:'DEC',payload:product.id})}>
                <BsDash />
                </span>
                <span className="quantity">
                {product.quantity}
                </span>
                <span className="inc"onClick={()=>dispatch({type:'INC',payload:product.id})} >
                <BsPlus />
                </span>
            </div>
            </div>
            <div className="col-2"> 
            <div className="cart-totalPrice text-left ml-10 pl-5 cart-responsive-totalPrice">
           {currencyFormatter.format(product.discountPrice * product.quantity, {code: 'USD'})}
                </div>
                </div>
                <div className="col-2"> 
                <div className="cart-delete cart-responsive-delete ml-20" >
                <BsFillBackspaceFill onClick={()=>dispatch({type:'REMOVE',payload:product.id})} />
                </div>
                </div>
            </div>
            </div>
            ))}
           
            </div>
            
                <div className="col-3 summary-col">
                <div className="summary mt-10 text-center">
                <div className="summary-heading">
                                Summary
                            </div>
                            <div className="summary-details">
                                <div className="row mb-10">
                                    <div className="col-6">
                                        Total Items:
                                    </div>
                    <div className="col-6">{totalQuantities}</div>
                                </div>
                                <div className="row mb-10">
                                    <div className="col-6">
                                        Total Price
                                    </div>
                                    <div className="col-6">
                                        {currencyFormatter.format(totalPrice, {code: 'USD'})}
                                    </div>
                                </div>
                                <button type="button" className="checkout">Checkout</button>
                            </div>
                </div>
                
            </div>
           
           
            </div>
            </> :'Your Cart is Empty'}
            </div>
        </div>
    )
}

export default Cart
