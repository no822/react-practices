import React from 'react';
import {createPortal} from 'react-dom'
import styles from './Modal.module.css';

const Backdrop = (props) => {
    return <div onClick={props.onClick} className={styles.backdrop}></div>
}

const ModalOverlay = (props) => {
    return (
        <div className={styles.modal}>
            {props.children}
        </div>
    )
}

const Modal = (props) => {
    const modalCloseHandler = () => {
        props.closeModal();
    }

    return (
        <>
            {createPortal(
                <Backdrop onClick={modalCloseHandler}/>,
                document.getElementById('backdrop')
            )}

            {createPortal(
                <ModalOverlay>{props.children}</ModalOverlay>,
                document.getElementById('cart')
            )}
        </>
    );
};

export default Modal;