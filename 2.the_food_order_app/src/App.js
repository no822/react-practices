import React, {useState, useEffect} from 'react';
import './App.css';
import Header from "./components/Header/Header";
import MealsSummary from "./components/MealsSummary/MealsSummary";
import AvailableMeals from "./components/Meals/AvailableMeals";
import {CartProvider} from "./context/cartContext";


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
