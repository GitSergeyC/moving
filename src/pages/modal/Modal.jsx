import React, { useState, useEffect } from "react";
import "./modal.css";
import { FaTimes } from "react-icons/fa";
import { sendFormData } from "../../utils/sendForm";

export default function Modal({ isOpen, onClose }) {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [success, setSuccess] = useState(false);

  // Хук всегда вызывается!
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (e.target.classList.contains("modal-overlay")) {
        onClose();
      }
    };

    if (isOpen) window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, [isOpen, onClose]);

  // если модалка закрыта — просто ничего не показываем
  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await sendFormData(form);
    if (response.success) {
      setSuccess(true);
      setForm({ name: "", phone: "", message: "" });
      setTimeout(() => setSuccess(false), 3000);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          <FaTimes />
        </button>
        <h2 className="modal-title">ВЫЗВАТЬ ГРУЗЧИКОВ</h2>

        <form className="modal-form" onSubmit={handleSubmit}>
          <label>
            Имя:
            <input
              type="text"
              placeholder="Ваше имя"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
          </label>

          <label>
            Телефон:
            <input
              type="tel"
              placeholder="+7 (___) ___-__-__"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              required
            />
          </label>

          <label>
            Сообщение:
            <textarea
              rows="3"
              placeholder="Ваш комментарий..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
          </label>

          <button type="submit" className="modal-button">
            Отправить
          </button>

          {success && (
            <p className="success-message">✅ Заявка успешно отправлена!</p>
          )}
        </form>
      </div>
    </div>
  );
}
