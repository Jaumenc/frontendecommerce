import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NuestraTienda from './pages/NuestraTienda';
import Opiniones from './pages/Opiniones';
import CompararProductos from './pages/CompararProductos';
import Wishlist from './pages/Wishlist';
import Login from './pages/Login';
import ContrasenaOlvidada from './pages/ContrasenaOlvidada';
import Registrarse from './pages/Registrarse';
import CambiarContrasena from './pages/CambiarContrasena';
import OpinionIndividual from './pages/OpinionIndividual';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy';
import ShippingPolicy from './pages/ShippingPolicy';
import TermAndConditions from './pages/TermAndConditions';
import ProductoIndividual from './pages/ProductoIndividual';
import Carrito from './pages/Carrito';
import Checkout from './pages/Checkout';

function App() {
  return  (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home />}  />
            <Route path="about" element={<About/>} />
            <Route path="contact" element={<Contact/>} />
            <Route path="tienda" element={<NuestraTienda/>} />
            <Route path="producto/:id" element={<ProductoIndividual/>} />
            <Route path="opiniones" element={<Opiniones/>} />
            <Route path="opinion/:id" element={<OpinionIndividual/>} />
            <Route path="carrito" element={<Carrito/>} />
            <Route path="checkout" element={<Checkout/>} />
            <Route path="comparar-productos" element={<CompararProductos/>} />
            <Route path="wishlist" element={<Wishlist/>} />
            <Route path="login" element={<Login/>} />
            <Route path="contrasena-olvidada" element={<ContrasenaOlvidada/>} />
            <Route path="registrarse" element={<Registrarse/>} />
            <Route path="cambiar-contrasena" element={<CambiarContrasena/>} />
            <Route path="politica-privacidad" element={<PrivacyPolicy/>} />
            <Route path="politica-reembolso" element={<RefundPolicy/>} />
            <Route path="politica-envio" element={<ShippingPolicy/>} />
            <Route path="terminos-condiciones" element={<TermAndConditions/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );  
}

export default App;
