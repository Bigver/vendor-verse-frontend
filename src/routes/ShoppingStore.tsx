import {  ToastContainer } from 'react-toastify';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import HomePage from '../pages/shopingStore/HomePage';
import '../styles/shopingStore/main.scss'
import ProductsPage from '../pages/shopingStore/ProductsPage';
import ProductPage from '../pages/shopingStore/ProductPage';
import CartPage from '../pages/shopingStore/CartPage';
import Information from '../pages/shopingStore/InformationPage';

const ShoppingStore = () => {
  return (
    <BrowserRouter>
      <ToastContainer position="bottom-center" limit={1} />
      <Routes>
        <Route path="/store/:nameStore/homepage" element={<HomePage />} />
        <Route path="/store/:nameStore/products/:category" element={<ProductsPage />} />
        <Route path="/store/:nameStore/products/product/:id" element={<ProductPage />} />
        <Route path="/store/:nameStore/cart" element={<CartPage />} />
        <Route path="/store/:nameStore/information" element={<Information />} />
      </Routes>
    </BrowserRouter>
  )
}

export default ShoppingStore