import React from "react";
import "./About.scss";

import Tag from "../UI/Tag/Tag";

import about_img from "../../img/section-about/about-img.jpg";
import arrow_right_yellow from "../../img/section-about/arrow-right-yellow.svg";

const About = () => {
   return (
    <section className="about" id="about">
        <div className="container">
            <div className="about__inner">
                <div className="about__inner--img-wrapper">
                    <img className="about__inner--img" src={about_img} alt="" />
                </div>
                <div className="about__inner--content">
                    <Tag>About us</Tag>
                    <h2 className="section-title">We are skilled in providing superior services</h2>
                    <h3 className="section-text">Customer satisfaction is such a key part of many successful businesses. Most companies have</h3>
                    <a className="about__inner--content-link" href="#">
                        Read More
                        <img className="about__inner--content-link-img" src={arrow_right_yellow} alt="" />
                    </a>
                </div>
            </div>
        </div>
    </section>
   )
};

export default About;