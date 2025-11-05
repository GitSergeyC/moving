import "./header.css"
import logo from '/logo.png';
import { FaPhoneAlt, FaWhatsapp, FaInstagram, FaBars } from 'react-icons/fa';


function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <img src={logo} alt="Логотип" className="header-logo" />
        <div className="header-text">
          <h1>Название компании</h1>
          <p>Услуги грузчиков</p>
        </div>
      </div>

      <div className="header-right">
        <div className="header-phones">
          <FaPhoneAlt className="phone-icon" />
          <div>
            <a href="tel:+70000000000">+7 (000) 000-00-00</a>
            <a href="tel:+70000000001">+7 (000) 000-00-01</a>
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
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram"
          >
            <FaInstagram />
          </a>
        </div>

        <button className="order-button">Вызвать грузчиков</button>
        <button className="menu-button">
          <FaBars />
        </button>
      </div>
    </header>
  );
}

export default Header