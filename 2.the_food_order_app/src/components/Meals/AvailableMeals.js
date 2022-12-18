import React from 'react';
import Card from "../UI/Card";
import styles from './AvailableMeals.module.css';
import MealItem from "./MealItem";

const AvailableMeals = (props) => {
    return (
        <div className={styles.meals}>
            <Card>
                {props.meals.map(meal =>
                    <MealItem
                        key={meal.id}
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