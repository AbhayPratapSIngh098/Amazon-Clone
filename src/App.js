import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { HomePage,NavBar, CheckOut, SearchResult, ProductPage } from './Component';



const App = () => {
  return (
    <BrowserRouter>
        <NavBar />
        <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/search" exact element={<SearchResult />} />
        <Route path="/product/:id" exact element={<ProductPage />} />
        <Route path="/checkout" exact element={<CheckOut />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App