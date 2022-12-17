import React, { useState, useEffect } from 'react';
import styles from './NewUserForm.module.css';
import Button from "../UI/Button"; // props.onClick

const NewUserForm = (props) => {
    const [userName, setUserName] = useState("");
    const [age, setAge] = useState("");

    const userNameChangeHandler = e => {
        setUserName(e.target.value);
    }

    const userAgeChangeHandler = e => {
         setAge(e.target.value);
    }

    const onSubmitHandler = e => {
        e.preventDefault();
        const userInfo = { userName, age: parseInt(age) };
        props.onAddUser(userInfo);
        setUserName('');
        setAge('');
    }

    return (
        <form onSubmit={onSubmitHandler} className={styles.newUserForm}>
            <div className={styles.newUserForm__input}>
                <label>Username</label>
                <input value={userName} onChange={userNameChangeHandler} type='text' />
            </div>
            <div className={styles.newUserForm__input}>
                <label>Age</label>
                <input value={age} onChange={userAgeChangeHandler} type='number' />
            </div>
            <div className={styles.newUserForm__actions}>
                <Button>
                    <input type='submit' value='Add User' className={styles.newUserForm__action}/>
                </Button>
            </div>
        </form>
    );
};

export default NewUserForm;