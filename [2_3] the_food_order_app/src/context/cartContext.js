import React, {useState, useEffect, createContext, useContext, useMemo} from 'react';

const CartValueContext = createContext();
const CartActionsContext = createContext();

export const CartProvider = (props) => {
    const [cart, setCart] = useState([]);
    const [mealItems, setMealItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [httpError, setHttpError] = useState();

    useEffect(() => {
        const fetchMeals = async () => {
            setIsLoading(true);
            const response = await fetch(process.env.REACT_APP_URL);

            if (!response.ok) {
                throw new Error('Something is wrong');
            }

            const data = await response.json();
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
            setMealItems(loadedMeals);
            setIsLoading(false);
        }

        fetchMeals().catch(error => {
            setIsLoading(false);
            setHttpError(error.message);
        });
    }, []);


    const addCartItem = (id, addedAmount) => {
        const item = mealItems.filter(item => item.id === id)[0];
        const isCartItem = cart.filter(cartItem => cartItem.id === item.id).length === 1;
        if (isCartItem) {
            const newCart = cart.map(cartItem => {
                if (cartItem.id === item.id) {
                    return {...cartItem, amount: cartItem.amount + addedAmount}
                } else {
                    return cartItem;
                }
            });
            setCart(newCart);
        } else {
            const newItem = {
                key: id,
                id: id,
                name: item.name,
                description: item.description,
                price: item.price,
                amount: 1
            };
            setCart([...cart, newItem]);
        }
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

    const clearCart = () => setCart([]);

    const values = {cart, mealItems, isLoading, httpError}
    const actions = useMemo(() => {
        return {
            addCartItem, removeCartItem, clearCart
        }
    }, [cart, mealItems]);

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
