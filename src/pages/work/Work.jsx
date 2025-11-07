import React from "react";
import "./work.css";

const AboutUs = () => {
  return (
    <section className="about-container1">
      <div className="about-left">
        <h1 className="about-title">Как мы работаем</h1>
        <ol className="about-text">
            <strong><li>Оставляете заявку</li></strong>
             Заполните форму на сайте или позвоните нам — обсудим детали заказа.
            <strong><li>Рассчитываем стоимость</li></strong>
              Оперативно уточняем объём работ и даём точную цену без скрытых платежей.
            <strong><li>Подбираем транспорт и бригаду</li></strong>
              Назначаем подходящую машину и опытных грузчиков под ваш заказ.
            <strong><li>Выполняем заказ</li></strong>
              Приходим вовремя, аккуратно загружаем и перевозим — всё чётко и безопасно.
            <strong><li>Вы платите по факту</li></strong>
              Оплата после завершения работы — только за реально оказанные услуги.
          </ol>
      </div>

      <div className="about-right">
        <div className="about-strengths">
          <h2>Дополнительные услуги:</h2>
          <ol className="spisok">
            <li>Погрузка или разгрузка — <strong>от 4000 Тенге/час</strong></li>
            <li>Упаковка (пленка, коробки и др.) — <strong>от 1000 Тенге/м²</strong></li>
            <li>Срочный выезд — <strong>+20%</strong> к стандартному тарифу</li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
