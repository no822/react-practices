import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import {useSelector} from "react-redux";

const Cart = (props) => {
    const cart = useSelector(state => state.cart.cart);
    const isShowCart = useSelector(state => state.cart.isShow);
    const totalPrices = cart.map(item => item.price * item.quantity);
    const isEmptyCart = cart.length === 0;

    const cartItems = (
        <ul>
            {cart.map((item, idx) =>
                <CartItem
                    key={item.id}
                    item={{
                        id: item.id,
                        price: item.price,
                        title: item.title,
                        description: item.description,
                        quantity: item.quantity,
                        total: totalPrices[idx]
                    }}
                />
            )}
        </ul>
    );

    const emptyCart = <h4 className={classes.empty}>empty cart</h4>;

    return (
        <>
            {isShowCart &&
                <Card className={classes.cart}>
                    <h2>Your Shopping Cart</h2>
                    {!isEmptyCart ? cartItems : emptyCart}
                </Card>

            }
        </>
    );
};

export default Cart;
