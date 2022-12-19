import React from 'react';
import styles from './Cart.module.css';
import CartItem from "./CartItem";

const Cart = (props) => {
    const orderSubmitHandler = () => {
        console.log('order');
    }

    const totalPrice = (carts) => {
        return carts
            .map(item => item.price)
            .reduce((total, price) => {
                return total + price
            }, 0);
    }

    return (
        <>
            <div className={styles.cartItems}>
                {props.carts.map(item =>
                    <CartItem
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        amount={item.amount}
                        price={item.price}
                        onRemove={props.removeItem}
                        onAdd={props.addItem}
                    />
                )}
            </div>
            <div className={styles.total}>
                <div>Total Amount</div>
                <div>{totalPrice(props.carts)}</div>
            </div>
            <div className={styles.actions}>
                <button onClick={props.closeModal} className={styles.buttonAlt}>Close</button>
                <button onClick={orderSubmitHandler} className={styles.button}>Order</button>
            </div>

        </>
    );
};

export default Cart;