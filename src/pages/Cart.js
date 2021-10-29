import React, { useEffect, useReducer } from 'react';
import axios from 'axios';

const INITIAL_STATE = { cart: [] };

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const newCart = [...state.cart,action.product];
            return {cart:newCart}
        case 'REMOVE_FROM_CART':
            if(state.cart.length==0){
                return state;
            }
            const index = state.cart.indexOf(action.product);
            if (index === -1) {
                return state;
            }
            const copy = [...state.cart];
            copy.splice(index, 1);
            return {cart:copy}
        default:
            return INITIAL_STATE;
    }
}


function Cart() {
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

    return (
        <div  className='m-12'>
            <div>{state.cart.map((el,i) => (<div key={i}>{el}</div>))} </div>
            <div className='text-4xl'>Ballon
            <button onClick={()=>dispatch({type:'ADD_TO_CART',product:'Ballon'})} className='text-3xl bg-green-500 text-green-100 rounded ml-4 px-4 py-2'>+</button>
                <button onClick={() => dispatch({ type: 'REMOVE_FROM_CART', product: 'Ballon' })} className='text-3xl bg-red-500 text-red-100 rounded ml-4 px-4 py-2'>-</button>
            </div>
            <div className='text-4xl'>Car
            
            <button onClick={()=>dispatch({type:'ADD_TO_CART',product:'Car'})} className='text-3xl bg-green-500 text-green-100 rounded ml-4 px-4 py-2'>+</button>
                <button onClick={() => dispatch({ type: 'REMOVE_FROM_CART', product: 'Car' })} className='text-3xl bg-red-500 text-red-100 rounded ml-4 px-4 py-2'>-</button>
            
            </div>
            <div className='text-4xl'>Mouse 
            <button onClick={()=>dispatch({type:'ADD_TO_CART',product:'Mouse'})} className='text-3xl bg-green-500 text-green-100 rounded ml-4 px-4 py-2'>+</button>
            <button onClick={() => dispatch({ type: 'REMOVE_FROM_CART', product: 'Mouse' })} className='text-3xl bg-red-500 text-red-100 rounded ml-4 px-4 py-2'>-</button>
            </div>
            <div className='text-4xl'>Keyboard
            
            
            </div>
            <div className='text-4xl'>Juice</div>
        </div>
        
    );
}

export default Cart;



//const [state,dispatch]=useReducer(reducer,{})
//dispatch(addProduct(productXX));
//const panier=
//{productCount:0,
//cart: [],
//addProductToCart: () => { },
//updateCart: () => { }, removeProductFromCart:()=>{}}
//useState() //ex: const [state,setState]=useState(defaultSateValue);



//const x=['3','44']
//{productId:3,productCount:10}
// const colors=[{ id: 1, color: 'red' }, { id: 2, color: 'green' }];

// const updateColor=(cl) =>{
//    return  colors.map(el => {
//         if (el.id == cl.id) {
//             el.color = cl.color;
//         }
//     })
// }
// updateColor({ id: 2, color: 'orange' })
    
