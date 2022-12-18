import React from 'react';
import styles from './Header.module.css';
import meals from './meals.jpg'
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
    return (
        <>
            <div className={styles.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton/>
            </div>
            <div className={styles.mainImage}>
                <img src={meals} alt='meals'/>
            </div>
        </>
    );
};

export default Header;