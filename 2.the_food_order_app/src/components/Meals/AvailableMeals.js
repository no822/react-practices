import React from 'react';
import Card from "../UI/Card";
import styles from './AvailableMeals.module.css';
import MealItem from "./MealItem";
import {useCartValue} from "../../context/cartContext";

const AvailableMeals = (props) => {
    const cart = useCartValue();
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