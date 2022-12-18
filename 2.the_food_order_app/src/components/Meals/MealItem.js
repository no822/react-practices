import React from 'react';
import MealItemForm from "./MealItemForm";
import styles from './MealItem.module.css';

const MealItem = () => {
    return (
        <div className={styles.meal}>
            <div>
                <h3>상품명</h3>
                <div className={styles.description}>상품 설명</div>
                <div className={styles.price}>상품가격</div>
            </div>
            <MealItemForm/>
        </div>
    );
};

export default MealItem;