import React, {useState, useEffect} from 'react';
import styles from './Cart.module.css';
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = (props) => {
    const [isCheckout, setIsCheckout] = useState(false);

    const hasItem = props.carts.length !== 0;

    const orderHandler = () => {
        console.log('order');
        setIsCheckout(true);
    }

    const totalPriceCalculator = (carts) => {
        return carts
            .map(item => item.amount * item.price)
            .reduce((total, price) => {
                return parseFloat((total + price).toFixed(2));
            }, 0);
    }


    const modalActions = (
        <div className={styles.actions}>
            <button onClick={props.closeModal} className={styles.buttonAlt}>Close</button>
            {hasItem && <button onClick={orderHandler} className={styles.button}>Order</button>}
        </div>
    );

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
            {isCheckout && <Checkout onCancel={props.closeModal}/>}
            {!isCheckout && modalActions}
        </>
    );
};

export default Cart;