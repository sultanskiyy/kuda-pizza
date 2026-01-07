import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Korzina from "./components/Korzina";
import { CartProvider } from "./components/context/CartContext"; // 🔥 to‘g‘rilandi

const HomePage = React.lazy(() => import("./pages/home/HomePage"));
const MenuPage = React.lazy(() => import("./pages/menu/MenuPage"));

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="menus" element={<MenuPage />} />
            <Route path="korzina" element={<Korzina />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
