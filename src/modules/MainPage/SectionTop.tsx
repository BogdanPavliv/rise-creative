import { useState } from "react";
import FsLightbox from "fslightbox-react";
import creative_img from "../../img/section-top/creative-agency-img.jpg";
import chart_img from "../../img/section-top/chart.svg";
import google from "../../img/section-top/companies/google.png";
import dropbox from "../../img/section-top/companies/dropbox.png";
import amazon from "../../img/section-top/companies/amazon.png";
import atlassian from "../../img/section-top/companies/atlassian.png";
import hubspot from "../../img/section-top/companies/hubspot.png";
import arrow_right from "../../img/section-top/arrow-right.svg";
import play from "../../img/section-top/play.svg";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import styles from "../../styles/top/index.module.scss";

const SectionTop: React.FC = () => {
   // To open the lightbox change the value of the "toggler" prop.
   const [toggler, setToggler] = useState(false);

   return (
    <section className={styles.top} id="top">
        <div className="container-right">
            <div className={styles.top__inner__top}>
                <div className={styles.top__inner__left}>
                    <motion.h1 initial={{ y:"2rem", opacity:0 }} animate={{ y:0, opacity:1 }} transition={{duration:2, type: "ease-in"}} className="title">We’re a Creative Design Agency</motion.h1>
                    <div className="subtitle">We are delivering top level digital services best experlenced team, just get stared </div>
                    <div className={styles.top__inner__btns}>
                        <a href="#" className={styles.top__inner__btn_get_started}>
                            Get Started
                            <img src={arrow_right} alt="" />
                        </a>
                        <a href="#" className={styles.top__inner__btn_how_it_works} onClick={() => setToggler(!toggler)}>
                            <img src={play} alt="" />
                            How it works
                        </a>
                        <FsLightbox
                            toggler={toggler}
                            sources={[
                                'https://www.youtube.com/watch?v=DoirrCfhjf0',
                            ]}
                        />
                    </div>
                    <ul className={styles.top__inner__list}>
                        <li className={styles.top__inner__item}>
                            <CountUp start={0} end={20} className={styles.top__inner__item_title}/><span>+</span>
                            <p className={styles.top__inner__item_text}>Years of  Excellent</p>
                        </li>
                        <li className={styles.top__inner__item}>
                            <CountUp start={0} end={90} className={styles.top__inner__item_title}/><span>%</span>
                            <p className={styles.top__inner__item_text}>Happy  Client</p>
                        </li>
                        <li className={styles.top__inner__item}>
                            <CountUp end={80} className={styles.top__inner__item_title}/><span>%</span>
                            <p className={styles.top__inner__item_text}>Project  Succes</p>
                        </li>
                    </ul>
                </div>
                <div className={styles.top__inner__right}>
                    <motion.img initial={{ x:"7rem", opacity:0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration:2, type: "ease-in" }} className={styles.top__inner__img_creative} src={creative_img} alt="Creative" />
                    <motion.img initial={{ x:"14rem", opacity:0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration:2, type: "ease-in" }} className={styles.top__inner__img_chart} src={chart_img} alt="Chart" />
                </div>
            </div>
        </div>
        <div className="container">
            <div className={styles.top__inner__bootom}>
                    <ul className={styles.top__inner__brands}>
                        <li className={styles.top__inner__brands_item}>
                            <img className={styles.top__inner__brands_img} src={google} alt="google" />
                        </li>
                        <li className={styles.top__inner__brands_item}>
                            <img className={styles.top__inner__brands_img} src={dropbox} alt="dropbox" />
                        </li>
                        <li className={styles.top__inner__brands_item}>
                            <img className={styles.top__inner__brands_img} src={amazon} alt="amazon" />
                        </li>
                        <li className={styles.top__inner__brands_item}>
                            <img className={styles.top__inner__brands_img} src={atlassian} alt="atlassian" />
                        </li>
                        <li className={styles.top__inner__brands_item}>
                            <img className={styles.top__inner__brands_img} src={atlassian} alt="atlassian" />
                        </li>
                        <li className={styles.top__inner__brands_item}>
                            <img className={styles.top__inner__brands_img} src={hubspot} alt="hubspot" />
                        </li>
                    </ul>
                </div>
        </div>
    </section>
   )
};

export default SectionTop;