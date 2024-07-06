import React from "react";
import "./OurServices.scss";

import TagCenter from "../UI/TagCenter/TagCenter";

import product_img from "../../img/section-our-services/product.svg";
import web_img from "../../img/section-our-services/web.svg";
import brochures_img from "../../img/section-our-services/brochures.svg";
import logo_name_img from "../../img/section-our-services/logo_name.svg";
import marketing_img from "../../img/section-our-services/marketing.svg";
import business_img from "../../img/section-our-services/business.svg";
import human_img from "../../img/section-our-services/human.svg";
import infographics_img from "../../img/section-our-services/infographics.svg";

const OurServices = () => {
    return (
        <section className="our-services" id="our-services"> 
           <div className="container">
              <TagCenter>our searvices</TagCenter>
              <h2 className="section-title text-center">What Creative Design We Offer</h2>
              <h3 className="section-text text-center">Business owners and managers lead by example. The values and work ethic displayed by a company's decision makers have a direct ...</h3>
              <ul className="our-services__list">
                <li className="our-services__item">
                    <img className="our-services__item--img" src={product_img} alt="product"/>
                    <h3 className="our-services__item--title">Product Management</h3>
                    <p className="our-services__item--text">vacancy available 20</p>
                </li>
                <li className="our-services__item">
                    <img className="our-services__item--img" src={web_img} alt="web"/>
                    <h3 className="our-services__item--title">Web & Mobile Development</h3>
                    <p className="our-services__item--text">vacancy available 20</p>
                </li>
                <li className="our-services__item">
                    <img className="our-services__item--img" src={brochures_img} alt="brochures"/>
                    <h3 className="our-services__item--title">Brochures & Flyers</h3>
                    <p className="our-services__item--text">vacancy available 20</p>
                </li>
                <li className="our-services__item">
                    <img className="our-services__item--img" src={logo_name_img} alt="logo_name"/>
                    <h3 className="our-services__item--title">Logo & name cards</h3>
                    <p className="our-services__item--text">vacancy available 20</p>
                </li>
                <li className="our-services__item">
                    <img className="our-services__item--img" src={marketing_img} alt="marketing"/>
                    <h3 className="our-services__item--title">Marketing & Commuication</h3>
                    <p className="our-services__item--text">vacancy available 20</p>
                </li>
                <li className="our-services__item">
                    <img className="our-services__item--img" src={business_img} alt="business"/>
                    <h3 className="our-services__item--title">Business Development</h3>
                    <p className="our-services__item--text">vacancy available 20</p>
                </li>
                <li className="our-services__item">
                    <img className="our-services__item--img" src={human_img} alt="human"/>
                    <h3 className="our-services__item--title">Human Resources</h3>
                    <p className="our-services__item--text">vacancy available 20</p>
                </li>
                <li className="our-services__item">
                    <img className="our-services__item--img" src={infographics_img} alt="infographics"/>
                    <h3 className="our-services__item--title">Infographics & Illustrations</h3>
                    <p className="our-services__item--text">vacancy available 20</p>
                </li>
              </ul>
           </div>
        </section>
    )
};

export default OurServices;