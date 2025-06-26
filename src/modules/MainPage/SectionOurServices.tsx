import TagCenter from "../../components/UI/TagCenter/TagCenter";
import product_img from "../../img/section-our-services/product.svg";
import web_img from "../../img/section-our-services/web.svg";
import brochures_img from "../../img/section-our-services/brochures.svg";
import logo_name_img from "../../img/section-our-services/logo_name.svg";
import marketing_img from "../../img/section-our-services/marketing.svg";
import business_img from "../../img/section-our-services/business.svg";
import human_img from "../../img/section-our-services/human.svg";
import infographics_img from "../../img/section-our-services/infographics.svg";
import styles from "../../styles/our-services/index.module.scss";

const SectionOurServices: React.FC = () => {
    return (
        <section className={styles.our_services} id="our-services"> 
           <div className="container">
              <TagCenter>our searvices</TagCenter>
              <h2 className="section-title text-center">What Creative Design We Offer</h2>
              <h3 className="section-text text-center">Business owners and managers lead by example. The values and work ethic displayed by a company's decision makers have a direct ...</h3>
              <ul className={styles.our_services__list}>
                <li className={styles.our_services__item}>
                    <img className={styles.our_services__item__img} src={product_img} alt="product"/>
                    <h3 className={styles.our_services__item__title}>Product Management</h3>
                    <p className={styles.our_services__item__text}>vacancy available 20</p>
                </li>
                <li className={styles.our_services__item}>
                    <img className={styles.our_services__item__img} src={web_img} alt="Web"/>
                    <h3 className={styles.our_services__item__title}>Web & Mobile Development</h3>
                    <p className={styles.our_services__item__text}>vacancy available 20</p>
                </li>
                <li className={styles.our_services__item}>
                    <img className={styles.our_services__item__img} src={brochures_img} alt="brochures"/>
                    <h3 className={styles.our_services__item__title}>Brochures & Flyers</h3>
                    <p className={styles.our_services__item__text}>vacancy available 20</p>
                </li>
                <li className={styles.our_services__item}>
                    <img className={styles.our_services__item__img} src={logo_name_img} alt="Logo name"/>
                    <h3 className={styles.our_services__item__title}>Logo & name cards</h3>
                    <p className={styles.our_services__item__text}>vacancy available 20</p>
                </li>
                <li className={styles.our_services__item}>
                    <img className={styles.our_services__item__img} src={marketing_img} alt="Marketing"/>
                    <h3 className={styles.our_services__item__title}>Marketing & Commuication</h3>
                    <p className={styles.our_services__item__text}>vacancy available 20</p>
                </li>
                <li className={styles.our_services__item}>
                    <img className={styles.our_services__item__img} src={business_img} alt="Business"/>
                    <h3 className={styles.our_services__item__title}>Business Development</h3>
                    <p className={styles.our_services__item__text}>vacancy available 20</p>
                </li>
                <li className={styles.our_services__item}>
                    <img className={styles.our_services__item__img} src={human_img} alt="Human"/>
                    <h3 className={styles.our_services__item__title}>Human Resources</h3>
                    <p className={styles.our_services__item__text}>vacancy available 20</p>
                </li>
                <li className={styles.our_services__item}>
                    <img className={styles.our_services__item__img} src={infographics_img} alt="Infographics"/>
                    <h3 className={styles.our_services__item__title}>Infographics & Illustrations</h3>
                    <p className={styles.our_services__item__text}>vacancy available 20</p>
                </li>
              </ul>
           </div>
        </section>
    )
};

export default SectionOurServices;