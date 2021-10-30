import {useReducer} from 'react';
import CartContext from './CartContext';

const INITIAL_STATE = {
      products: [],//[{},{},{}]
      productOnCart:0
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT_TO_CART':
            //dispatch({type:'ADD_PRODUCT_TO_CART',payload:{product_id:6,product_qte:1}});
            //get the new products count
            const newCount = state.productOnCart + action.payload.product_qte;
            //set the new product on products list //products[]
            const idList = [];//[prod,prod3,prod5]
            [...state.products].map(el=>idList.push(el.product_id));
            const index = idList.indexOf(action.payload.product_id);
            if (index !== -1) {
                const productObj = state.products[index]//{product_id:6,product_qte:1, product_qte:2}
                let oldProductCount = 0;
                if (Object.keys(productObj)) {
                    if (Object.keys(productObj).indexOf('product_qte')) {
                        oldProductCount = productObj.product_qte
                    }
                }
                
                const newProductCount = oldProductCount + 1;
                const newProduct = { ...productObj, product_qte: newProductCount }
                //get the old product list on the cart
                const productList = [...state.products];
                //remove the new product in the old list
                productList.splice(index, 1);
                // add the new product updated on the list
                productList.push(newProduct)
                
                return { products: productList, productOnCart: newCount };
            }
          
            const newStateProducts = [...state.products, action.payload];
            //console.log(newStateProducts)
            //return thew new state with the new product added
            return { products: newStateProducts, productOnCart: newCount };  
        default:
            return state;
    }
}


//dispatch({type:'ADD_PRODUCT_TO_CART',payload:{product_id:6,product_qte:1}});

function CartProvider(props) {

    const [state,dispatch] = useReducer(reducer, INITIAL_STATE);
    return (
        <CartContext.Provider value={[state,dispatch]}>
            {props.children}
        </CartContext.Provider>
    );
}

export default CartProvider;