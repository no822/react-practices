import React from 'react';
import Input from '../UI/Input';
import styles from './MealItemForm.module.css';

const MealItemForm = () => {
    const amountChangeHandler = e => {
        console.log(e);
    }

    return (
        <form className={styles.form}>
            <div className={styles.container}>
                <Input>
                    <label>Amount</label>
                    <input type='number' onChange={amountChangeHandler} value='1'/>
                </Input>
                <button type='submit'>+ Add</button>
            </div>
        </form>
    );
};

export default MealItemForm;