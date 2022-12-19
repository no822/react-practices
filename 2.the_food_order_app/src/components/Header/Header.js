import React, {useState} from 'react';
import styles from './Header.module.css';
import meals from './meals.jpg'
import HeaderCartButton from "./HeaderCartButton";
import Modal from "../UI/Modal";
import Cart from "../Cart/Cart";
import {useCartValue, useCartAction} from "../../context/cartContext";

const Header = (props) => {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const carts = useCartValue();
    const {addCartItem, removeCartItem} = useCartAction();

    const openModal = () => {
        setIsOpenModal(true);
    }

    const closeModal = () => setIsOpenModal(false);
    return (
        <>
            <div className={styles.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton carts={carts} openModal={openModal}/>
            </div>
            <div className={styles.mainImage}>
                <img src={meals} alt='meals'/>
            </div>
            {isOpenModal &&
                <Modal closeModal={closeModal}>
                    <Cart
                        carts={carts}
                        closeModal={closeModal}
                        addItem={addCartItem}
                        removeItem={removeCartItem}
                    />
                </Modal>
            }
        </>
    );
};

export default Header;