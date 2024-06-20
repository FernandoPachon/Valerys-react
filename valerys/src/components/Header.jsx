import React from "react";
import { Link, BrowserRouter,Routes,Route } from "react-router-dom";
import estilos from"../App.css";
import Home from "./Home";
import Products from "./Products";
import Logo from "../assets/img/LogoTienda .png"

const Header = () => {
        return (
    <BrowserRouter>
        <header  className="menu-headerValerys" style={estilos}>
            <nav className="navBar">
            <Link className="linkHeader" to={'/home'}>Inicio</Link>
            <Link className="linkHeader" to={'/products'}>Productos</Link>
            <Link className="imageLogo"><img className="imageLogo"src={Logo} alt="" /></Link>
            <Link className="linkHeader">Nosotros</Link>
            <Link className="linkHeader">Perfil</Link>
            </nav>
        </header>
        <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/products" element={<Products/>}/>
        </Routes>
    </BrowserRouter>
    );
};

export default Header;
