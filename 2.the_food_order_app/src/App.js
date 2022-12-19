import React, {useState} from 'react';
import './App.css';
import Header from "./components/Header/Header";
import MealsSummary from "./components/MealsSummary/MealsSummary";
import AvailableMeals from "./components/Meals/AvailableMeals";
import {CartProvider} from "./context/cartContext";


// OBJECTIVE: 음식 주문 앱

// <Requirements>
// 1. 상품 리스트 렌더링
// - 1.1 상품명, 상품설명, 가격
// - 1.2 각 item 별 수량 카운터, 장바구니 추가버튼
// 2. 장바구니
// - 2.1 nav 에 있는 버튼, 총 상품의 갯수
// - 2.2 버튼 클릭하면 각 상품의 갯수, 주문 총액 렌더링 되는 팝업창, Close / Order 버튼
// - 2.3 팝업창 안에서도 각 상품의 갯수 조절 가능

// <STEP>
// 1. extra-files 파일들 보고 컴포넌트 구성 짜기
// - 1.1 헤더 그룹: <Header /> - <HeaderCartButton /> - <CartIcon />
// - 1.2 카트 그룹: <Cart /> - <CartItem />
// - 1.3 상품 리스트 그룹: <AvailableMeals /> - <MealItem /> - <MealItemForm /> - <Input />
// - 1.4 Summary 그룹: <MealsSummary />

// 2. 컴포넌트 구성하기
// - 2.1 기본 레이아웃 짜기: 헤더 그룹, Summary 그룹 ✓
// - 2.2 상품 리스트 그룹: meals 데이터를 입력받아서 리스트 렌더링 ✓
// - 2.3 카트 그룹: contextAPI로 카트데이터 처리, 상품수량 추가 이벤트 핸들링
// - 2.4 모달창 그룹: 레이아웃

// contextApi, useReducer, useEffect

function App() {

    return (
        <div className='App'>
            <CartProvider>
                <Header/>
                <MealsSummary/>
                <AvailableMeals/>
            </CartProvider>
        </div>
    );
}

export default App;
