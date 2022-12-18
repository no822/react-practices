import React from 'react';
import Card from "../UI/Card";
import styles from './AvailableMeals.module.css';
import MealItem from "./MealItem";

const AvailableMeals = () => {
    return (
        <div className={styles.meals}>
            <Card>
                <MealItem/>
                <MealItem/>
                <MealItem/>
                <MealItem/>
            </Card>
        </div>
    );
};

export default AvailableMeals;