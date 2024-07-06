import React from "react";
import "./WhyChoose.scss";

import Tag from "../UI/Tag/Tag";

import why_choose_img from "../../img/section-why-choose/why-choose-img.jpg";

const WhyChoose = () => {
   return (
    <section className="why-choose" id="why-choose">
        <div className="container">
            <div className="why-choose__inner">
                <div className="why-choose__inner--content">
                    <Tag>Why choose us</Tag>
                    <h2 className="section-title">Expert advising clients <br /> On financial challenges</h2>
                    <h3 className="section-text">Customer satisfaction is such a key part of many successful businesses. Most companies ,..</h3>
                    <ul className="why-choose__list">
                        <li className="why-choose__item refresh">
                            <h3 className="why-choose__item--title">Frist working process</h3>
                            <p className="why-choose__item--text">Customer satisfaction is such a key part of many successful businesses.</p>
                        </li>
                        <li className="why-choose__item people">
                            <h3 className="why-choose__item--title">Dedicated Team</h3>
                            <p className="why-choose__item--text">business model that refers to an agreement between the client and service provider,  </p>
                        </li>
                        <li className="why-choose__item support">
                            <h3 className="why-choose__item--title">24/7 Hours Support</h3>
                            <p className="why-choose__item--text">Scaling your team to provide assistance around the clock might sound like a </p>
                        </li>
                    </ul>
                </div>
                <div className="why-choose__inner--img-wrapper">
                    <img className="why-choose__inner--img" src={why_choose_img} alt="" />
                </div>
            </div>
        </div>
    </section>
   )
};

export default WhyChoose;