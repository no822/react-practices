import React from 'react';
import styles from './UserItem.module.css';
//{name, age, id, onRemoveUser}
const UserItem = (props) => {

    const itemClickHandler = () => {
        props.onRemoveUser(props.id);
    }

    return (
        <div onClick={itemClickHandler}  className={styles.userItem__container}>
            {`${props.name} ( ${props.age} years old )`}
        </div>
    );
};

export default UserItem;