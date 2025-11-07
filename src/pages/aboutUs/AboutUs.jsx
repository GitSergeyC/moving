import React from "react";
import "./aboutUs.css";
import move1 from "../../images/move1.jpg";
import move2 from "../../images/move2.jpg";
import move3 from "../../images/move3.jpg"

const AboutUs = () => {
  return (
    <section className="about-container" >
      <div className="about-left">
        <h1 className="about-title">Надежные решения для транспортировки и погрузки</h1>
        <p className="about-text">
          Мы — команда профессионалов, которая уже много лет помогает людям и компаниям с переездами,
          доставкой и погрузочно-разгрузочными работами. <br /><br />
          <strong>Наша цель</strong> — сделать процесс перевозки максимально простым, быстрым и безопасным
          для каждого клиента.
        </p>

        <div className="about-images">
          <img src={move1} alt="Упаковка мебели" />
          <img src={move2} alt="Подъем мебели" />
          <img src={move3} alt="Переезд" />
        </div>

        {/* <a href="#details" className="about-link">Подробнее</a> */}
      </div>

      <div className="about-right">
        <div className="about-strengths">
          <h2>Наши сильные стороны:</h2>
          <ol>
            <li>Переезды любой сложности — от упаковки до распаковки</li>
            <li>Аккуратные и опытные грузчики</li>
            <li>Удобная система оплаты: за час, объем или комплекс</li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
