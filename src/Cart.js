import React from 'react';
import CartItem from './CartItem';

// class component always using camel-case convention
class Cart extends React.Component {
    constructor() {
        // super is used to call the constructor of the parent class if a developer is inheriting
        super();
        this.state = {
            products: [
                {
                    price: 99,
                    title: 'Watch',
                    qty: 1,
                    img: '',
                    id: 1
                },
                {
                    price: 999,
                    title: 'Mobile Phone',
                    qty: 4,
                    img: '',
                    id: 2
                },
                {
                    price: 22999,
                    title: 'Laptop',
                    qty: 15,
                    img: '',
                    id: 3
                }
            ]
        }
    }
    render () {
        const { products } = this.state;
        return(
            <div className='cart'>
                {/* mapping over an array of an constructor */}
                {products.map((product) => {
                    return (
                        <CartItem
                             product={product}
                             key={product.id}
                        />
                    )
                })}
            </div>
        )
    }
}

export default Cart;