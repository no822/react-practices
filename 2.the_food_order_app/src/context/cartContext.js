import React, {useState, useEffect, createContext, useContext, useMemo} from 'react';

const CartValueContext = createContext();
const CartActionsContext = createContext();

export const CartProvider = (props) => {
    const [cart, setCart] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchMeals = async () => {
            setIsLoading(true);
            const meals = await fetch('https://order-meal-react-default-rtdb.firebaseio.com/react-meal/meals.json');
            const data = await meals.json();

            const loadedMeals = [];

            for (let key in data) {
                loadedMeals.push({
                    key: key,
                    id: key,
                    name: data[key].name,
                    description: data[key].description,
                    price: data[key].price,
                    amount: 0
                })
            }
            setCart(loadedMeals);
            setIsLoading(false);
        }

        fetchMeals();
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

    const values = {cart, isLoading}
    const actions = useMemo(() => {
        return {
            addCartItem, removeCartItem
        }
    }, []);

    return (
        <CartActionsContext.Provider value={actions}>
            <CartValueContext.Provider value={values}>
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
