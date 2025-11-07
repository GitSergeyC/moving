import React, { useState } from "react";
import "./reviews.css";

// Пути к твоим скриншотам
import review4 from "/src/images/reviews/review1.png";
import review3 from "/src/images/reviews/review2.png";
import review2 from "/src/images/reviews/review3.jpeg";
import review1 from "/src/images/reviews/review4.jpeg";



export default function Reviews() {
  const reviews = [review1, review2, review3, review4];
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 2;

  const handlePrev = () => {
    setStartIndex((prev) =>
      prev === 0 ? reviews.length - itemsPerPage : prev - itemsPerPage
    );
  };

  const handleNext = () => {
    setStartIndex((prev) =>
      prev + itemsPerPage >= reviews.length ? 0 : prev + itemsPerPage
    );
  };

  const visibleReviews = reviews.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section className="reviews-section">
      <h2 className="reviews-title">ОТЗЫВЫ</h2>
      <div className="reviews-carousel">
        {visibleReviews.map((img, index) => (
          <div key={index} className="review-item">
            <img src={img} alt={`Отзыв ${index + 1}`} />
          </div>
        ))}
      </div>

      <div className="reviews-controls">
        <button onClick={handlePrev} className="arrow-btn">←</button>
        <button onClick={handleNext} className="arrow-btn">→</button>
      </div>
    </section>
  );
}
