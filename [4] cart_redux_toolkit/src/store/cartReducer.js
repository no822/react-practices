import {createSlice} from '@reduxjs/toolkit';

const initialCart = {
    cart: [],
    productItems: [
        {
            id: 'p1',
            title: 'Test',
            price: 6,
            description: 'This is a first product - amazing!'
        },
        {
            id: 'p2',
            title: 'Test 2',
            price: 12,
            description: 'This is a second product - MORE amazing!'
        },
    ],
    isShow: true,
};

const cartSlice = createSlice( {
    name: 'cart',
    initialState: initialCart,
    reducers: {
        addItems: (state, action) => {
            const targetProduct = state.cart.filter(item => {
                if (item.id === action.payload) {
                    return true;
                }
                return false;
            });
            const isItem = targetProduct.length !== 0;

            if (isItem) {
                const newCart = state.cart
                    .map(item => {
                        if (item.id === action.payload) {
                            return {...item, quantity: item.quantity + 1};
                        } else {
                            return item;
                        }
                    });
                state.cart = newCart;
            } else {
                const productItem = state.productItems.filter(item => item.id === action.payload)[0];
                const newItem = {...productItem, quantity: 1};
                state.cart.push(newItem);
            }
        },
        removeItem: (state, action) => {
            const newCart = state.cart
                    .map(item => (item.id === action.payload) ? {...item, quantity: item.quantity - 1} : item)
                    // 2. 수량이 0이라면 카트에서 해당 상품 제거
                    .filter(item => item.quantity !== 0);
            state.cart = newCart;
        },
        toggleCart: (state) => {
            state.isShow = !state.isShow;
        }
    }
});

export const cartAction = cartSlice.actions;

export default cartSlice.reducer;