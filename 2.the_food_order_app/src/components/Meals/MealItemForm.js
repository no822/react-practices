import React from 'react';
import Input from '../UI/Input';
import styles from './MealItemForm.module.css';

const MealItemForm = () => {
    return (
        <form className={styles.form}>
            <div className={styles.container}>
                <Input>
                    <label>Amount</label>
                    <input type='number' value='1'/>
                </Input>
                <button type='submit'>+ Add</button>
            </div>
        </form>
    );
};

export default MealItemForm;