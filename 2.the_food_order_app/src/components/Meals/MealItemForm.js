import React, {useState} from 'react';
import Input from '../UI/Input';
import styles from './MealItemForm.module.css';
import {useCartAction, useCartValue} from "../../context/cartContext";

const MealItemForm = (props) => {
    const [amount, setAmount] = useState(1);
    const {addCartItem} = useCartAction();

    const amountChangeHandler = e => {
        const added = parseInt(e.target.value);
        setAmount(added);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        addCartItem(props.id, amount);
    }

    return (
        <form onSubmit={submitHandler} className={styles.form}>
            <div className={styles.container}>
                <Input>
                    <label>Amount</label>
                    <input type='number' onChange={amountChangeHandler} min='1' value={amount}/>
                </Input>
                <button type='submit'>+ Add</button>
            </div>
        </form>
    );
};

export default MealItemForm;