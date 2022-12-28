import React from 'react';
import styles from './AvailableMeals.module.css';
import Card from "../UI/Card";
import MealItem from "./MealItem";
import {useCartValue} from "../../context/cartContext";

const AvailableMeals = () => {
    const {cart, isLoading, httpError} = useCartValue();
    if (isLoading) return <div className={styles.loading}>Loading...</div>;
    if (httpError) return <div className={styles.error}>{httpError}</div>
    if (cart.length === 0) {
        return (
            <Card style={{margin: '2rem auto', maxWidth: '90%'}}>
                <div className={styles.empty}>Item list is empty</div>
            </Card>
        );
    }
    return (
        <div className={styles.meals}>
            <Card>
                {cart.map(meal =>
                    <MealItem
                        key={meal.id}
                        id={meal.id}
                        name={meal.name}
                        description={meal.description}
                        price={meal.price}
                    />
                )}
            </Card>
        </div>
    );
};

export default AvailableMeals;