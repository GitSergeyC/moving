import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './pages/header/Header';
import NavBar from './pages/navBar/NavBar';
import MainSection from "./pages/mainSection/MainSection";
import AboutUs from "./pages/aboutUs/AboutUs";
import Work from "./pages/work/Work";
import Reviews from "./pages/reviews/Reviews";
import Bid from "./pages/bid/Bid";
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      {/* <NavBar /> */}
      <MainSection />
      <AboutUs />
      <Work />
      <Reviews />
      <Bid />

      <main style={{ padding: "40px" }}>
        {/* <Routes>
          <Route path="/"/>
          <Route path="/about" element={<h2>Наши услуги</h2>} />
          <Route path="/services" element={<h2>Наши услуги</h2>} />
          <Route path="/tariffs" element={<h2>Тарифы</h2>} />
          <Route path="/contacts" element={<h2>Контакты</h2>} />
          <Route path="/calculator" element={<h2>Онлайн-расчёт</h2>} />
          <Route path="/faq" element={<h2>FAQ</h2>} />
        </Routes> */}
      </main>
    </Router>
  );
}

export default App;
