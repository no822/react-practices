import {configureStore, createSlice} from "@reduxjs/toolkit";
import cartReducer from './cartReducer';
// - 컴포넌트 구조
// 1. <Products /> - <ProductItem />: 버튼 클릭시 카트에 아이템 추가
// 2. <Cart/> - <CartItem />: amount가 1 이상인 CartItem만 렌더링, CartItem의 버튼 클릭해서 수량 조절
// 3. <MainHeader /> - <CartButton />: CartButton을 클릭해서 Cart 토글

// - 어떤 상태가 필요한가?
// 1. cart: 유저가 Products에서 선택한 상품이 담긴다, <Cart /> 컴포넌트에 렌더링
// 2. productItems: 상품목록, <Products /> 에서 랜더링
// 3. isShow: <Cart /> 렌더링 여부


const store = configureStore({
    reducer: {cart: cartReducer}
});

export default store;
