import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import currencyFormatter from 'currency-formatter'
import {BsDash, BsPlus} from "react-icons/bs";
function Details() {
    const { id } = useParams()
    const dispatch = useDispatch()
    const { product } = useSelector(state => state.ProductsReducer)
    console.log(product)
    const [quantity,setQuantity] = useState(1)

    useEffect(() => {
        dispatch({ type: 'PRODUCT', id })
    }, [id])
    return (
        <div className="container mtop-100">
            <div className="row">
                <div className="col-6">
                    <div className="details-image">
                        <img src={`/images/${product.image}`} alt="" />
                    </div>
                </div>
                <div className="col-6">
                    <div className="details-name">
                        {product.name}
                    </div>
                    <div className="details-price">
                <span className="details-actual-price">{currencyFormatter.format(product.price, { code: 'USD' })}</span>
                <span className="details-discount-price">{currencyFormatter.format(product.discountPrice, { code: 'USD' })}</span>
            </div>
            <div className="inc-dec">
            <span className="dec" onClick={()=>{
                if(quantity>1){
                    return setQuantity(quantity-1)
                }
            }}>
                <BsDash />
                </span>
                <span className="quantity">
                {quantity}
                </span>
                <span className="inc" onClick={()=>setQuantity(quantity+1)}>
                <BsPlus />
                </span>
             <button className="btn-default"onClick={()=>dispatch({type:'ADD_TO_CART',payload:{product,quantity}})} >add to cart</button>
            </div>
            <div className="details-desc">
                <h4>Details</h4>
                <div>{product.desc}</div>
            </div>
                </div>
            </div>
           
        </div>
    )
}

export default Details
