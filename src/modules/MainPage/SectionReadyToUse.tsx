import { useRef } from "react";
import Tag from "../../components/UI/Tag/Tag";
import arrow_right_card from "../../img/section-ready-to-use/arrow-right-card.svg";
import slider_arrow_prev from "../../img/section-ready-to-use/arrow-prev.png";
import slider_arrow_next from "../../img/section-ready-to-use/arrow-next.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from 'swiper/modules';
import dataSliderReadyToUse from "../../utils/slider-ready-to-use.json";
import { sliderReadyToUseSettings } from "../../utils/common.ts";
import styles from "../../styles/ready-to-use/index.module.scss";
import { SlideNavigationProps } from '../../types/slider'
// 
const SectionReadyToUse: React.FC = () => {
    const swiperRef = useRef<SwiperClass | null>(null);

    return (
        <section className={styles.ready_to_use}>
            <div className="container">
                <div className={styles.ready_to_use__wrapper}>
                    <Tag>Ready To Use</Tag>
                    <div className={styles.ready_to_use__top}>
                        <h2 className="section-title md">Elegant And Impressive Inner Pages</h2>
                        <SlideNavigation swiperRef={swiperRef} />
                    </div>
                    <div className={styles.ready_to_use__slider__wrapper}>
                        <Swiper
                            {...sliderReadyToUseSettings}
                            className={styles.swiper_ready_to_use}
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
                                    <div className={styles.ready_to_use__slide}>
                                        <img className={styles.ready_to_use__slide__img} src={card.image} alt="" />
                                        <h3 className={styles.ready_to_use__slide__title}>{card.title}</h3>
                                        <p className={styles.ready_to_use__slide__text}>{card.text}</p>
                                        <div className={styles.ready_to_use__slide__link_wrapper}>
                                            <a className={styles.ready_to_use__slide__link} href="#!">
                                                Read Case Study
                                                <img className={styles.ready_to_use__slide__link_img} src={arrow_right_card} alt="Arrow right card image" />
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

const SlideNavigation: React.FC<SlideNavigationProps> = ({ swiperRef }) => {
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

export default SectionReadyToUse;
