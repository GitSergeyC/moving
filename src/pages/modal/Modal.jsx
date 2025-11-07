import React, { useEffect, useState } from "react";
import "./modal.css";
import { FaTimes } from "react-icons/fa";

export default function Modal({ isOpen, onClose }) {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("https://movinggo.onrender.com/send-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const result = await response.json();
      console.log("Ответ сервера:", result);

      if (result.success) {
        setSuccess(true);
        setForm({ name: "", phone: "", message: "" });
        setTimeout(() => setSuccess(false), 4000);
      } else {
        alert("Ошибка при отправке. Попробуйте снова.");
      }
    } catch (err) {
      console.error("Ошибка сети:", err);
      alert("Ошибка соединения с сервером.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          <FaTimes />
        </button>
        <h2 className="modal-title">Вызвать грузчиков</h2>

        <form className="modal-form" onSubmit={handleSubmit}>
          <label>
            Имя:
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Ваше имя"
              required
            />
          </label>

          <label>
            Телефон:
            <input
              type="tel"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              placeholder="+7 (___) ___-__-__"
              required
            />
          </label>

          <label>
            Сообщение:
            <textarea
              rows="3"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Ваш комментарий..."
            />
          </label>

          <button type="submit" className="modal-button" disabled={loading}>
            {loading ? "Отправка..." : "Отправить"}
          </button>

          {success && (
            <p className="success-message">✅ Заявка успешно отправлена!</p>
          )}
        </form>
      </div>
    </div>
  );
}
