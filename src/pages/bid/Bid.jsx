import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Bid.css";

// импорт картинки
import bidImage from "../../images/bid-photo.jpg";

export default function Bid() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Форма отправлена:", form);
    setSuccess(true);
    setForm({ name: "", phone: "", message: "" });
    setTimeout(() => setSuccess(false), 4000);
  };

  return (
    <section className="bid-section">
      <div className="bid-container">
        {/* Левая часть — изображение */}
        <motion.div
          className="bid-image"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src={bidImage} alt="Грузчики" />
        </motion.div>

        {/* Правая часть — форма */}
        <motion.div
          className="bid-form-container"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div className="bid-card">
            <h4>Оставить заявку</h4>

            <form className="bid-form" onSubmit={handleSubmit}>
              <label>
                Ваше имя:
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  placeholder="Введите имя"
                />
              </label>

              <label>
                Телефон:
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  required
                  placeholder="+7 (___) ___-__-__"
                />
              </label>

              <label>
                Суть заявки:
                <textarea
                  rows="3"
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  placeholder="Опишите вашу задачу..."
                />
              </label>

              <motion.button
                type="submit"
                className="bid-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Отправить
              </motion.button>

              {success && (
                <motion.p
                  className="success-message"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  ✅ Заявка успешно отправлена!
                </motion.p>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
