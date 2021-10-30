import React, { useContext,useEffect, useMemo,useState } from 'react';
import CartContext from '../store/cart/CartContext';

function Cart() {
    const [] = useContext(CartContext);
    const [counter, setCounter] = useState(0);
    useEffect(() => {
        
    }, []);

   

    return (
        <div>
           
        </div>
    );
}

export default Cart;