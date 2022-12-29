import styles from './CartItem.module.css';

const CartItem = (props) => {
    const price = `$${props.price.toFixed(2)}`;

    const addSingleItem = () => {
        props.onAdd(props.id, 1);
    }

    const removeSingleItem = () => {
        props.onRemove(props.id);
        if (props.totalPrice === props.price) {
            props.resetCheckout();
        }
    }

    return (
        <li className={styles['cart-item']}>
            <div>
                <h2>{props.name}</h2>
                <div className={styles.summary}>
                    <span className={styles.price}>{price}</span>
                    <span className={styles.amount}>x {props.amount}</span>
                </div>
            </div>
            <div className={styles.actions}>
                <button onClick={removeSingleItem}>−</button>
                <button onClick={addSingleItem}>+</button>
            </div>
        </li>
    );
};

export default CartItem;
