
import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom";
import { CartProvider } from "../context/CartContext";
import { Home } from "../pages/Home";
import { NavBar } from "../components/Common/NavBar";
import { Login } from "../pages/Login";
import { NotFound } from "../pages/NotFound";
import { Footer } from "../components/Common/Footer";
import { Cart } from "../pages/Cart";
import { Checkout } from "../pages/Checkout";



const MainLayout = () => {
    return (
        <>
            <NavBar />
            <Outlet />
            <Footer />
        </>
    )
}


export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <CartProvider>
                <Routes>
                    <Route element={<MainLayout />}>
                        <Route path="/" element={<Navigate to="/home" />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/payment" element={<Checkout />}/>

                        <Route path="*" element={<NotFound />} />
                    </Route>
                    <Route path="/login" element={<Login />} />
                </Routes>
            </CartProvider>
        </BrowserRouter>
    )
}