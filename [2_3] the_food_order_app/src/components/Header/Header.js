import React, {useState} from 'react';
import styles from './Header.module.css';
import meals from './meals.jpg'
import HeaderCartButton from "./HeaderCartButton";
import Modal from "../UI/Modal";
import Cart from "../Cart/Cart";
import {useCartValue} from "../../context/cartContext";

const Header = () => {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const {cart} = useCartValue();

    const openModal = () => setIsOpenModal(true);
    const closeModal = () => setIsOpenModal(false);

    return (
        <>
            <div className={styles.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton carts={cart} openModal={openModal}/>
            </div>
            <div className={styles.mainImage}>
                <img src={meals} alt='meals'/>
            </div>
            {isOpenModal &&
                <Modal closeModal={closeModal}>
                    <Cart cart={cart} closeModal={closeModal}/>
                </Modal>
            }
        </>
    );
};

export default Header;