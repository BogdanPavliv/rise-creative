import Tag from "../../components/UI/Tag/Tag";
import why_choose_img from "../../img/section-why-choose/why-choose-img.jpg";
import styles from "../../styles/why-choose/index.module.scss";

const SectionWhyChoose: React.FC = () => {
   return (
    <section className={styles.why_choose} id="why-choose">
        <div className="container">
            <div className={styles.why_choose__inner}>
                <div className={styles.why_choose__inner__content}>
                    <Tag>Why choose us</Tag>
                    <h2 className="section-title">Expert advising clients <br /> On financial challenges</h2>
                    <h3 className="section-text">Customer satisfaction is such a key part of many successful businesses. Most companies ,..</h3>
                    <ul className={styles.why_choose__list}>
                        <li className={`${styles.why_choose__item} ${styles.refresh}`}>
                            <h3 className={styles.why_choose__item__title}>Frist working process</h3>
                            <p className={styles.why_choose__item__text}>Customer satisfaction is such a key part of many successful businesses.</p>
                        </li>
                        <li className={`${styles.why_choose__item} ${styles.people}`}>
                            <h3 className={styles.why_choose__item__title}>Dedicated Team</h3>
                            <p className={styles.why_choose__item__text}>business model that refers to an agreement between the client and service provider,  </p>
                        </li>
                        <li className={`${styles.why_choose__item} ${styles.support}`}>
                            <h3 className={styles.why_choose__item__title}>24/7 Hours Support</h3>
                            <p className={styles.why_choose__item__text}>Scaling your team to provide assistance around the clock might sound like a </p>
                        </li>
                    </ul>
                </div>
                <div className={styles.why_choose__inner__img_wrapper}>
                    <img className={styles.why_choose__inner__img} src={why_choose_img} alt="Why choose image" />
                </div>
            </div>
        </div>
    </section>
   )
};

export default SectionWhyChoose;