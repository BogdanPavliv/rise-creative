import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import "./Top.scss";

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

const Top = () => {
   // To open the lightbox change the value of the "toggler" prop.
   const [toggler, setToggler] = useState(false);

   return (
    <section className="top" id="top">
        <div className="container-right">
            <div className="top__inner--top">
                <div className="top__inner--left">
                    <motion.h1 initial={{ y:"2rem", opacity:0 }} animate={{ y:0, opacity:1 }} transition={{duration:2, type: "ease-in"}} className="title">We’re a Creative Design Agency</motion.h1>
                    <div className="subtitle">We are delivering top level digital services best experlenced team, just get stared </div>
                    <div className="top__inner--btns">
                        <a href="#" className="top__inner--btn-get-started">
                            Get Started
                            <img src={arrow_right} alt="" />
                        </a>
                        <a href="#" className="top__inner--btn-how-it-works" onClick={() => setToggler(!toggler)}>
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
                    <ul className="top__inner--list">
                        <li className="top__inner--item">
                            <CountUp start={0} end={20} className="top__inner--item-title"/><span>+</span>
                            <p className="top__inner--item-text">Years of  Excellent</p>
                        </li>
                        <li className="top__inner--item">
                            <CountUp start={0} end={90} className="top__inner--item-title"/><span>%</span>
                            <p className="top__inner--item-text">Happy  Client</p>
                        </li>
                        <li className="top__inner--item">
                            <CountUp end={80} className="top__inner--item-title"/><span>%</span>
                            <p className="top__inner--item-text">Project  Succes</p>
                        </li>
                    </ul>
                </div>
                <div className="top__inner--right">
                    <motion.img initial={{ x:"7rem", opacity:0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration:2, type: "ease-in" }} className="top__inner--img-creative" src={creative_img} alt="Creative" />
                    <motion.img initial={{ x:"14rem", opacity:0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration:2, type: "ease-in" }} className="top__inner--img-chart" src={chart_img} alt="Chart" />
                </div>
            </div>
        </div>
        <div className="container">
            <div className="top__inner--bootom">
                    <ul className="top__inner--brands">
                        <li className="top__inner--brands-item">
                            <img className="top__inner--brands-img" src={google} alt="google" />
                        </li>
                        <li className="top__inner--brands-item">
                            <img className="top__inner--brands-img" src={dropbox} alt="dropbox" />
                        </li>
                        <li className="top__inner--brands-item">
                            <img className="top__inner--brands-img" src={amazon} alt="amazon" />
                        </li>
                        <li className="top__inner--brands-item">
                            <img className="top__inner--brands-img" src={atlassian} alt="atlassian" />
                        </li>
                        <li className="top__inner--brands-item">
                            <img className="top__inner--brands-img" src={atlassian} alt="atlassian" />
                        </li>
                        <li className="top__inner--brands-item">
                            <img className="top__inner--brands-img" src={hubspot} alt="hubspot" />
                        </li>
                    </ul>
                </div>
        </div>
    </section>
   )
};

export default Top;