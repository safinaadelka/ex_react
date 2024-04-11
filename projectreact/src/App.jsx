import { useState } from "react";
import "./App.css";

import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";

import CatalogPage from "./Pages/Catalog/Catalog";
// import CardPage from "./Pages/CardPage/CardPage";

import UsersPage from "./Pages/UsersPage/UsersPage";
import CreatePage from "./Pages/CreatePage/CreatePage";
import BasketPage from './Pages/BasketPage/BasketPage'
import Start from "./Pages/Start/Start";
import { Routes, Route } from "react-router-dom";
import OneCard from "./Pages/CardPage/CardPage";


function App() {
  const [count, setCount] = useState(0);
  const [basket,setBasket] = useState([]); 


  return (
    <>
      <Header basket={basket}/>

      <Routes>
        <Route path="/" element={<Start />} />
        {/* <Route path="/catalog" element={<CatalogPage />} /> */}
      <Route path="/catalog" element={<CatalogPage addToBasket={setBasket} basket={basket} />} />
        <Route path="/" element={<Banner />} />{" "}
        {/* Переместите Banner внутрь маршрута "/" */}
        {/* adele */}
        {/* <Route path="/catalog/:id" element={<CardPage addToBasket={setBasket} basket={basket} />} /> */}
        <Route path="/users" element={<UsersPage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/basket" element = {<BasketPage basket={basket}/>} />
        <Route path="/basket/:id" element = {<OneCard basket={basket}/>} />
        <Route path="/catalog/:id" element = {<OneCard addToBasket={setBasket} basket={basket}/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
