import React, {useState, useEffect} from 'react';
import styles from './Cart.module.css';
import CartItem from "./CartItem";

const Cart = (props) => {
    const orderSubmitHandler = () => {
        console.log('order');
    }

    const totalPriceCalculator = (carts) => {
        return carts
            .map(item => item.amount * item.price)
            .reduce((total, price) => {
                return parseFloat((total + price).toFixed(2));
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
                <div>{totalPriceCalculator(props.carts)}</div>
            </div>
            <div className={styles.actions}>
                <button onClick={props.closeModal} className={styles.buttonAlt}>Close</button>
                <button onClick={orderSubmitHandler} className={styles.button}>Order</button>
            </div>

        </>
    );
};

export default Cart;