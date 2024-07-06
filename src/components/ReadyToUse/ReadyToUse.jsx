import React, { useRef } from "react";
import "./ReadyToUse.scss";

import Tag from "../UI/Tag/Tag";

import slide_1_img from "../../img/section-ready-to-use/slide-1.jpg";
import slide_2_img from "../../img/section-ready-to-use/slide-2.jpg";

import arrow_right_card from "../../img/section-ready-to-use/arrow-right-card.svg";

import slider_arrow_prev from "../../img/section-ready-to-use/arrow-prev.png";
import slider_arrow_next from "../../img/section-ready-to-use/arrow-next.png";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from 'swiper/modules';

import dataSliderReadyToUse from "../../utils/slider-ready-to-use.json";
import { sliderReadyToUseSettings } from "../../utils/common";

const ReadyToUse = () => {
    const swiperRef = useRef(null);

    return (
        <section className="ready-to-use">
            <div className="container">
                <div className="ready-to-use__wrapper">
                    <Tag>Ready To Use</Tag>
                    <div className="ready-to-use__top">
                        <h2 className="section-title md">Elegant And Impressive Inner Pages</h2>
                        <SlideNavigation swiperRef={swiperRef} />
                    </div>
                    <div className="ready-to-use__slider--wrapper">
                        <Swiper
                            {...sliderReadyToUseSettings}
                            className="swiper-ready-to-use"
                            onSwiper={(swiper) => (swiperRef.current = swiper)}
                            navigation={{
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev',
                            }}
                            modules={[Navigation]}
                        >
                            {/* slider */}
                            {dataSliderReadyToUse.map((card, i) => (
                                <SwiperSlide key={i}>
                                    <div className="ready-to-use__slide">
                                        <img className="ready-to-use__slide--img" src={card.image} alt="" />
                                        <h3 className="ready-to-use__slide--title">{card.title}</h3>
                                        <p className="ready-to-use__slide--text">{card.text}</p>
                                        <div className="ready-to-use__slide--link-wrapper">
                                            <a className="ready-to-use__slide--link" href="#!">
                                                Read Case Study
                                                <img className="ready-to-use__slide--link-img" src={arrow_right_card} alt="" />
                                            </a>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        
                    </div>
                </div>
            </div>
        </section>
    );
};

const SlideNavigation = ({ swiperRef }) => {
    const slidePrev = () => {
        if (swiperRef.current && swiperRef.current.slidePrev) {
            swiperRef.current.slidePrev();
        }
    };

    const slideNext = () => {
        if (swiperRef.current && swiperRef.current.slideNext) {
            swiperRef.current.slideNext();
        }
    };

    return (
        <div className="buttons-container">
            <button
                onClick={slidePrev}
                className="swiper-button-prev"
                disabled={!swiperRef.current || swiperRef.current.isBeginning}
            >
                <img src={slider_arrow_prev} alt="" />
            </button>
            <button
                onClick={slideNext}
                className="swiper-button-next"
                disabled={!swiperRef.current || swiperRef.current.isEnd}
            >
                <img src={slider_arrow_next} alt="" />
            </button>
        </div>
    );
};

export default ReadyToUse;
