import {useReducer} from 'react';
import CartContext from './CartContext';

const INITIAL_STATE = {
    cart: {
        products: [],
        productOnCart:0
    },
}
const reducer=(state=INITIAL_STATE,action)=>{}
function CartProvider(props) {

    const cartReducer=useReducer(reducer,INITIAL_STATE)
    
    return (
        <CartContext.Provider value={cartReducer}>
            {props.children}
        </CartContext.Provider>
    );
}

export default CartProvider;