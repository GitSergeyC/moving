import "./header.css";
import logo from "/logo.png";
import { FaPhoneAlt, FaWhatsapp, FaInstagram, FaBars } from "react-icons/fa";
import { useState } from "react";
import Modal from "./../modal/Modal";

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <header className="header">
        <div className="header-left">
          <img src={logo} alt="Логотип" className="header-logo" />
          <div className="header-text">
            <h1>GoMove</h1>
            <p>Услуги грузчиков</p>
          </div>
        </div>

        <div className="header-right">
          <div className="header-phones">
            <FaPhoneAlt className="phone-icon" />
            <div>
              <a href="tel:+70000000000">+7 (705) 555-29-90</a>
              <a href="tel:+70000000001">+7 (707) 451-97-25</a>
            </div>
          </div>

          <div className="social-icons">
            <a
              href="https://wa.me/77074519725?text=Здравствуйте!%20Пишу%20вам%20с%20сайта."
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://www.instagram.com/pereezdalmaty2024/"
              target="_blank"
              rel="noopener noreferrer"
              className="instagram"
            >
              <FaInstagram />
            </a>
          </div>

          {/* Кнопка вызова модалки */}
          <button
            className="order-button"
            onClick={() => setIsModalOpen(true)}
          >
            Вызвать грузчиков
          </button>

          {/* <button className="menu-button">
            <FaBars />
          </button> */}
        </div>
      </header>

      {/* Подключаем модалку */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

export default Header;
