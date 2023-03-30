import React from 'react';
import CartItem from './CartItem';

// class component always using camel-case convention
class Cart extends React.Component {
    render () {
        return(
            <div className='cart'>
                <CartItem/>
                <CartItem/>
                <CartItem/>
            </div>
        )
    }
}

export default Cart;