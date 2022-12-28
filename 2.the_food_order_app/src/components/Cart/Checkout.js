import React from 'react';
import styles from './Checkout.module.css';

const Checkout = props => {
    // name, street, postal, city
    const onConfirmHandler = (e) => {
        e.preventDefault();
    }
    return <form onSubmit={onConfirmHandler}>
        <div className={styles.control}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name"/>
        </div>
        <div className={styles.control}>
            <label htmlFor="street">Street</label>
            <input type="text" id="street"/>
        </div>
        <div className={styles.control}>
            <label htmlFor="postal">Postal Code</label>
            <input type="text" id="postal"/>
        </div>
        <div className={styles.control}>
            <label htmlFor="city">City</label>
            <input type="text" id="city"/>
        </div>
        <div className={styles.actions}>
            <button type="button" onClick={props.onCancel} className={styles.cancel}>cancel</button>
            <button className={styles.order}>order</button>
        </div>
    </form>
}

export default Checkout;