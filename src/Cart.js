import React from 'react';
import CartItem from './CartItem';

// class component always using camel-case convention
const Cart = (props) => {
    const { products } = props;
    return (
        <div className='cart'>
            {/* mapping over an array of an constructor */}
            {products.map((product) => 
                <CartItem
                    key={product.id}
                    product={product}
                    onIncreaseQuantity={props.onIncreaseQuantity}
                    onDecreaseQuantity={props.onDecreaseQuantity}
                    onDeleteProduct={props.onDeleteProduct}
                />
            )}
        </div>
    )
}


export default Cart;