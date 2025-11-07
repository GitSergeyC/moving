import React, { useEffect } from "react";
import "./Modal.css";
import { FaTimes } from "react-icons/fa";

export default function Modal({ isOpen, onClose }) {
  if (!isOpen) return null;

  // Закрытие по клику вне окна
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (e.target.classList.contains("modal-overlay")) {
        onClose();
      }
    };
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, [onClose]);

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          <FaTimes />
        </button>
        <h2 className="modal-title">ВЫЗВАТЬ ГРУЗЧИКОВ</h2>

        <form className="modal-form">
          <label>
            Имя:
            <input type="text" placeholder="Ваше имя" required />
          </label>

          <label>
            Телефон:
            <input type="tel" placeholder="+7 (___) ___-__-__" required />
          </label>

          <label>
            Сообщение:
            <textarea rows="3" placeholder="Ваш комментарий..." />
          </label>

          <button type="submit" className="modal-button">
            Отправить
          </button>
        </form>
      </div>
    </div>
  );
}
