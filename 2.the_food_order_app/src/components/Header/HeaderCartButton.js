import React from 'react';
import CartIcon from "./CartIcon";
import styles from './HeaderCartButton.module.css';


const HeaderCartButton = () => {
    return (
        <button className={styles.button}>
            <div className={styles.icon}><CartIcon/></div>
            <div>Your Cart</div>
            <div className={styles.badge}>0</div>
        </button>
    );
};

export default HeaderCartButton;