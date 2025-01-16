import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomePage from "../pages/restaurant/HomePage";
import '../styles/restaurant/main.scss'
import MenuPage from "../pages/restaurant/MenuPage";
import CartPage from "../pages/restaurant/CartPage";
import CheckOutPage from "../pages/restaurant/CheckOutPage";
import MenusPage from "../pages/restaurant/MenusPage";
import MenusPage2 from "../pages/restaurant/MenusPage2";

const Restaurant = () => {
    return (
        <div>
            <BrowserRouter>
                <ToastContainer position="bottom-center" limit={1} />
                <Routes>
                    <Route path="/restaurant/:nameStore/homepage/:table_id" element={<HomePage />} />
                    <Route path="/restaurant/:nameStore/product/:id" element={<MenuPage />} />
                    <Route path="/restaurant/:nameStore/cart" element={<CartPage />} />
                    <Route path="/restaurant/:nameStore/checkout" element={<CheckOutPage />} />
                    <Route path="/restaurant/:nameStore/menus1/:category/:store_id" element={<MenusPage />} />
                    <Route path="/restaurant/:nameStore/menus2/:store_id" element={<MenusPage2 />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default Restaurant;