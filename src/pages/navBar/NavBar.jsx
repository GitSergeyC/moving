import React from "react";
import { NavLink } from "react-router-dom"; 
import "./navBar.css";

export default function NavBar() {
  const menuItems = [
    { label: "Главная", path: "/" },
    { label: "О компании", path: "/about" },
    { label: "Услуги", path: "/services" },
    { label: "Тарифы", path: "/tariffs" },
    { label: "Контакты", path: "/contacts" },
    { label: "Онлайн-расчёт", path: "/calculator" },
    { label: "FAQ", path: "/faq" },
  ];

  return (
    <div className="subheader">
      <nav className="nav-menu">
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="nav-location">
        Мы работаем по городу <strong>Алматы</strong> и ближайших районах
      </div>
    </div>
  );
}
