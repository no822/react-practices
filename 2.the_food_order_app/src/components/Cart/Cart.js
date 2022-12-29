import React, {useState, useMemo} from 'react';
import styles from './Cart.module.css';
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = (props) => {
    const [isCheckout, setIsCheckout] = useState(false);

    const hasItem = props.cart.length !== 0;

    const orderHandler = () => {
        setIsCheckout(true);
    }

    const resetIsCheckout = () => setIsCheckout(false);

    const totalPriceCalculator = (cart) => {
        return cart
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

    const total = useMemo(() => totalPriceCalculator(props.cart), [props.cart]);

    return (
        <>
            <div className={styles.cartItems}>
                {props.cart.map(item =>
                    <CartItem
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        amount={item.amount}
                        price={item.price}
                        onRemove={props.removeItem}
                        onAdd={props.addItem}
                        totalPrice={total}
                        resetCheckout={resetIsCheckout}
                    />
                )}
            </div>
            <div className={styles.total}>
                <div>Total Amount</div>
                <div>{total}</div>
            </div>
            {isCheckout
                && <Checkout cart={props.cart} onCancel={props.closeModal}/>}
            {!isCheckout
                && modalActions}
        </>
    );
};

export default Cart;