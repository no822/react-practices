import React from 'react';
import CartIcon from "./CartIcon";
import styles from './HeaderCartButton.module.css';


const HeaderCartButton = ({openModal, carts}) => {
    const cartClickHandler = () => {
        openModal();
    }

    const itemAmountCalculator = (carts) => {
        return carts.reduce((total, item) => {
            return total + item.amount
        }, 0);
    }

    return (
        <button onClick={cartClickHandler} className={styles.button}>
            <div className={styles.icon}><CartIcon/></div>
            <div>Your Cart</div>
            <div className={styles.badge}>{itemAmountCalculator(carts)}</div>
        </button>
    );
};

export default HeaderCartButton;