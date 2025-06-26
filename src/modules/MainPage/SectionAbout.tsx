import Tag from "../../components/UI/Tag/Tag";
import about_img from "../../img/section-about/about-img.jpg";
import arrow_right_yellow from "../../img/section-about/arrow-right-yellow.svg";
import styles from "../../styles/about/index.module.scss";

const SectionAbout: React.FC = () => {
   return (
    <section className={styles.about} id="about">
        <div className="container">
            <div className={styles.about__inner}>
                <div className={styles.about__inner__img_wrapper}>
                    <img className={styles.about__inner__img} src={about_img} alt="About image" />
                </div>
                <div className={styles.about__inner__content}>
                    <Tag>About us</Tag>
                    <h2 className="section-title">We are skilled in providing superior services</h2>
                    <h3 className="section-text">Customer satisfaction is such a key part of many successful businesses. Most companies have</h3>
                    <a className={styles.about__inner__content_link} href="#">
                        Read More
                        <img className={styles.about__inner__content_link_img} src={arrow_right_yellow} alt="Arrow right yellow image" />
                    </a>
                </div>
            </div>
        </div>
    </section>
   )
};

export default SectionAbout;