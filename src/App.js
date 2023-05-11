import React from "react";
import HomePage from "./pages/Home-page";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MealPage from "./pages/Meal-page";
import IngredientMealPage from "./pages/Ingredient-meal-page";
import SearchPageMeal from "./pages/Search-page-meal";
import Header from "./components/Header";

const  App = () => {
  return (
      <div>
          <BrowserRouter>
              <Header/>
              <Routes>
                  <Route path="/" element={<HomePage/>}/>
                  <Route path="/dinner/:strMeal" element={<MealPage/>}/>
                  <Route path="/dinner/strMeal/:ingredient" element={<IngredientMealPage/>}/>
                  <Route path="/search/:name" element={<SearchPageMeal/>}/>
              </Routes>
          </BrowserRouter>
      </div>
  )
}
export default App;
