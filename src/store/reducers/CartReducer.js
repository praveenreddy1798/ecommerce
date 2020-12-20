
const initState={
    products:[],
    totalPrice:0,
    totalQuantities:0,
}


const CartReducer=(state=initState,action)=>{
    let findProduct,productIndex
    
    switch(action.type){
        case 'ADD_TO_CART':{
            const {product,quantity} = action.payload
            const tPrice = state.totalPrice + (product.discountPrice * quantity)
            const tQuantities=state.totalQuantities + quantity
            const check = state.products.find(prod=>prod.id===product.id)
            
            if(check){
                return state

            }
            else{
                product.quantity=quantity
                return{
                    ...state,
                    products:[...state.products,product],
                    totalPrice:tPrice,
                    totalQuantities:tQuantities
                }
            }
        }
        case 'DEC' :{
            findProduct= state.products.find(product=>product.id===action.payload)
            productIndex=state.products.findIndex(product=>product.id===action.payload)
            if(findProduct.quantity>1){
                findProduct.quantity-=1
            }
            else{
                return state
            }
            
            findProduct[productIndex]=findProduct
            return{
                ...state,
                totalPrice:state.totalPrice-(findProduct.discountPrice),
                totalQuantities:state.totalQuantities-1
            }
                
        }
        case 'INC' :{
            findProduct= state.products.find(product=>product.id===action.payload)
            productIndex=state.products.findIndex(product=>product.id===action.payload)
            findProduct.quantity+=1
            findProduct[productIndex]=findProduct
            return{
                ...state,
                totalPrice:state.totalPrice+(findProduct.discountPrice),
                totalQuantities:state.totalQuantities+1
            }
                
        }
        case 'REMOVE':{
            findProduct= state.products.find(product=>product.id===action.payload)
            const filterdProduct = state.products.filter(product=>product.id!==action.payload)
            return{
                ...state,
                products:filterdProduct,
                totalPrice:state.totalPrice-(findProduct.discountPrice* findProduct.quantity),
                totalQuantities:state.totalQuantities-(findProduct.quantity)
            }

        }
        default:
            return state
    }


}
export default CartReducer