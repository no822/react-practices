import React, {useState, useEffect, createContext, useContext, useMemo} from 'react';
import dummyMeals from "../data/dummy-meals";

const CartValueContext = createContext();
const CartActionsContext = createContext();

export const CartProvider = (props) => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const initCart = dummyMeals.map(meal => ({...meal, amount: 0}));
        setCart(initCart);
    }, []);

    const addCartItem = (id, addedAmount) => {
        const addFn = (prevCart) =>
            prevCart.map(item => (item.id === id)
                ? {...item, amount: item.amount + addedAmount}
                : item
            );

        setCart(prev => addFn(prev));
    }

    const removeCartItem = id => {
        const removeFn = (prevCart) => {
            return prevCart.map(item => {
                if (item.id === id) {
                    const minusValue = (item.amount) > 0 ? item.amount - 1 : 0;
                    return {...item, amount: minusValue};
                } else {
                    return item;
                }
            })
        }
        setCart(prev => removeFn(prev));
    };

    const actions = useMemo(() => {
        return {
            addCartItem, removeCartItem
        }
    }, []);

    return (
        <CartActionsContext.Provider value={actions}>
            <CartValueContext.Provider value={cart}>
                {props.children}
            </CartValueContext.Provider>
        </CartActionsContext.Provider>
    )
}


export const useCartValue = () => {
    const value = useContext(CartValueContext);
    if (!value) {
        throw new Error('CartValueProvider should be required');
    }
    return value;
}

export const useCartAction = () => {
    const action = useContext(CartActionsContext);
    if (!action) {
        throw new Error('CartActionProvider should be required');
    }
    return action;
}
