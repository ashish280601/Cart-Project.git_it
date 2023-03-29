import React from 'react';

// class component always using camel-case convention
class CartItem extends React.Component {
    constructor() {
        // super is used to call the constructor of the parent class if a developer is inheriting
        super();
        this.state = {
            price: 999,
            title: 'Mobile Phone',
            qty: 1,
            img: ''
        }
    }
    render () {
        // object destructuring
        const {price, title, qty} = this.state;
        return (
            <div className='cart-item'>
                <div className='left-block'>
                    <img style={styles.image}/>
                </div>
                <div className='right-block'>
                    <div style={{fontSize: 25}}>{title}</div>
                    <div style={{color: '#777'}}>Rs {price}</div>
                    <div style={{color: '#777'}}>Qty: {qty}</div>
                    <div className='cart-item-actions'>
                        {/* button */}
                        <img alt='increase' className='action-icons' src='https://cdn-icons-png.flaticon.com/128/992/992651.png'/>
                        <img alt='decrease' className='action-icons' src='https://cdn-icons-png.flaticon.com/128/992/992683.png'/>
                        <img alt='delete' className='action-icons' src='https://cdn-icons-png.flaticon.com/128/1214/1214428.png'/>
                    </div>
                </div>
            </div>
        );
    }
}
// to give styling to our css had to use object 
const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}

export default CartItem;