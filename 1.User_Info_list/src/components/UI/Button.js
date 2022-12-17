import React from 'react';
import styles from './Button.module.css';

const Button = (props) => {
    return (
        <div className={styles.button} onClick={props.buttonClickHandler}>
            {props.children}
        </div>
    );
};

export default Button;