import React from 'react';
import BackDrop from "../UI/BackDrop";
import styles from './MessagePopUp.module.css';
import Button from "../UI/Button";

const MessagePopUp = (props) => {
    const closePopUpHandler = (e) => {
        props.onClosePopUp();
    }

    const popContainerClickHandler = e => {
        e.stopPropagation(); // prevent bubbling
    }

    return (
        <BackDrop onClickHandler={closePopUpHandler}>
            <div onClick={popContainerClickHandler} className={styles.container}>
                <header className={styles.messagePopUp__header}>Invalid input</header>
                <main className={styles.messagePopUp__content}>
                    <div>{props.popUpMessage}</div>
                    <div className={styles.messagePopUp__actions}>
                        <Button buttonClickHandler={closePopUpHandler}>Okay</Button>
                    </div>
                </main>
            </div>
        </BackDrop>
    );
};

export default MessagePopUp;