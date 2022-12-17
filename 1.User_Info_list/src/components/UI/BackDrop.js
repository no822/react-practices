import React from 'react';
import styles from './BackDrop.module.css';

const BackDrop = (props) => {
    return (
        <div onClick={props.onClickHandler} className={styles.container}>
            {props.children}
        </div>
    );
};

export default BackDrop;