
import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom";
import { Home } from "../pages/Home";
import { NavBar } from "../components/Common/NavBar";
import { Login } from "../pages/Login";
import { NotFound } from "../pages/NotFound";
import { Footer } from "../components/Common/Footer";



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

            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Navigate to="/home" />} />
                    <Route path="/home" element={<Home />} />

                    <Route path="*" element={<NotFound/>}/>
                </Route>
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}