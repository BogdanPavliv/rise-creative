import React from "react";
import "./ClientsKind.scss";

import TagCenter from "../UI/TagCenter/TagCenter";

import star_img from "../../img/section-clients-kind-words/star.svg";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import dataSliderClientsKind from "../../utils/slider-clients-kind.json";
import { sliderClientsKindSettings } from "../../utils/common";

const ClientsKind = () => {
  
  return (
    <section className="clients-kind">
      <div className="container">
        <TagCenter>testimonial</TagCenter>
        <h2 className="section-title text-center">Client’s kind Words</h2>
        <h3 className="section-text text-center">
          Business owners and managers lead by example. The values
        </h3>
        <div className="clients-kind__slider--wrapper">
        <Slider {...sliderClientsKindSettings} className="slick-clients-kind">
            {dataSliderClientsKind.map((card, i) => (
              <div key={i} className="clients-kind__slide-wrapper">
                <div className="clients-kind__slide">
                  <img
                    className="clients-kind__slide--img"
                    src={card.image}
                    alt=""
                  />
                  <h3 className="clients-kind__slide--name">{card.name}</h3>
                  <p className="clients-kind__slide--role">{card.role}</p>
                  <div className="clients-kind__slide--stars">
                    <img src={star_img} alt="" /> <img src={star_img} alt="" />{" "}
                    <img src={star_img} alt="" /> <img src={star_img} alt="" />{" "}
                    <img src={star_img} alt="" />
                  </div>
                  <div className="clients-kind__slide--quote">{card.quote}</div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default ClientsKind;
