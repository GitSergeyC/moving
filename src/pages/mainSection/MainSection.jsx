import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";
import "./mainSection.css";

export default function MainSection() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const services = [
    { id: "01", title: "Грузчики", price: "от 4500 Тенге/час" },
    { id: "02", title: "Мебельный мастер", price: "от 5000 Тенге/час" },
    {
      id: "03",
      title: "Переезды (квартирные, офисные)",
      price: "от 4500 Тенге/час за человека",
    },
  ];

  return (
    <section className="main-section">
      <motion.div
        className="main-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="main-title"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          Все для вашего переезда
        </motion.h2>

        <div className="service-list">
          {services.map((service, index) => (
            <motion.div
              className="service-card"
              key={service.id}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.5 + index * 0.3,
                duration: 0.6,
                ease: "easeOut",
              }}
            >
              <div className="service-number">{service.id}</div>
              <div className="service-info">
                <h3>{service.title}</h3>
                <p>{service.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {showScroll && (
        <motion.button
          className="scroll-to-top"
          onClick={scrollToTop}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaArrowUp />
        </motion.button>
      )}
    </section>
  );
}
