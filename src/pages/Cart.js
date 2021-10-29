import React, { useContext } from 'react';
import CartContext from '../store/CartContext';

function Cart() {
    const ctx = useContext(CartContext);
    return (
        <div>
            {ctx.color}
        </div>
    );
}

export default Cart;