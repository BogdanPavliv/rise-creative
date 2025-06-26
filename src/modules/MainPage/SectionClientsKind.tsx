import TagCenter from "../../components/UI/TagCenter/TagCenter";
import star_img from "../../img/section-clients-kind-words/star.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dataSliderClientsKind from "../../utils/slider-clients-kind.json";
import { sliderClientsKindSettings } from "../../utils/common";
import styles from "../../styles/clients-kind/index.module.scss";

const SectionClientsKind: React.FC = () => {
  
  return (
    <section className={styles.clients_kind}>
      <div className="container">
        <TagCenter>testimonial</TagCenter>
        <h2 className="section-title text-center">Client’s kind Words</h2>
        <h3 className="section-text text-center">
          Business owners and managers lead by example. The values
        </h3>
        <div className={styles.clients_kind__slider__wrapper}>
        <Slider {...sliderClientsKindSettings} className={styles.slick_clients_kind}>
            {dataSliderClientsKind.map((card, i) => (
              <div key={i} className={styles.clients_kind__slide_wrapper}>
                <div className={styles.clients_kind__slide}>
                  <img
                    className={styles.clients_kind__slide__img}
                    src={card.image}
                    alt={card.name}
                  />
                  <h3 className={styles.clients_kind__slide__name}>{card.name}</h3>
                  <p className={styles.clients_kind__slide__role}>{card.role}</p>
                  <div className={styles.clients_kind__slide__stars}>
                    <img src={star_img} alt="Star" /> <img src={star_img} alt="Star" />{" "}
                    <img src={star_img} alt="Star" /> <img src={star_img} alt="Star" />{" "}
                    <img src={star_img} alt="Star" />
                  </div>
                  <div className={styles.clients_kind__slide__quote}>{card.quote}</div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default SectionClientsKind;
