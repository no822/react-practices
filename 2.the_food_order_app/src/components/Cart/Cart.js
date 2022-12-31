import React, {useState, useMemo} from 'react';
import styles from './Cart.module.css';
import CartItem from "./CartItem";
import Checkout from "./Checkout";
import {useCartAction} from "../../context/cartContext";

const Cart = (props) => {
    const {clearCart, addCartItem, removeCartItem} = useCartAction();
    const [isCheckout, setIsCheckout] = useState(false);
    const [modalMsg, setModalMsg] = useState("");

    const hasItem = props.cart.length !== 0;

    const orderClickHandler = () => setIsCheckout(true);

    const submitOrder = (userInfo) => {
        fetch(process.env.REACT_APP_ORDER, {
            method: 'POST',
            body: JSON.stringify({
                user: userInfo,
                orders: props.cart
            }),
            headers: {'Content-Type': 'application/json'}
        }).then(() => {
            clearCart();
            setModalMsg("상품을 주문하였습니다.");
        }).catch((e) => {
            setModalMsg(e.message);
        })
    }

    const resetIsCheckout = () => setIsCheckout(false);
    const closeModal = () => {
        props.closeModal();
        setModalMsg("");
    };

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
            {hasItem && <button onClick={orderClickHandler} className={styles.button}>Order</button>}
        </div>
    );

    const total = useMemo(() => totalPriceCalculator(props.cart), [props.cart]);

    const cart = (
        <>
            <div className={styles.cartItems}>
                {props.cart.map(item =>
                    <CartItem
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        amount={item.amount}
                        price={item.price}
                        onRemove={removeCartItem}
                        onAdd={addCartItem}
                        totalPrice={total}
                        resetCheckout={resetIsCheckout}
                    />
                )}
            </div>
            <div className={styles.total}>
                <div>Total Amount</div>
                <div>{total}</div>
            </div>
            {isCheckout && <Checkout onOrder={submitOrder} onCancel={props.closeModal}/>}
            {!isCheckout && modalActions}
        </>
    );

    const messageModal = (
        <>
            <h2>알림</h2>
            <div className={styles.message}>{modalMsg}</div>
            <div className={styles.actions}>
                <button onClick={closeModal} className={styles.buttonAlt}>Close</button>
            </div>
        </>
    );

    return (
        <>{modalMsg.length === 0 ? cart : messageModal}</>
    );
};

export default Cart;