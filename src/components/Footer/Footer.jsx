import React from "react";
import "./Footer.scss";

import logo from "../../img/logo.svg"

export const  Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__inner--left">
            <div className="footer__inner--left-logo">
              <a className="footer__inner--left-link" href="#">
                <img className="footer__inner--left-img" src={logo} alt="" />
              </a>
            </div>
            <p className="footer__inner--left-description">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
            <div className="footer__inner--left-socials">
              <ul className="footer__inner--left-socials-list">
                <li className="footer__inner--left-socials-item">
                  <a className="footer__inner--left-socials-link" href="#">
                    <svg width="27" height="27" viewBox="0 0 27 27" className="link-img" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect y="0.0422363" width="26.9155" height="26.9155" rx="13.4577" fill="#F0E714"/>
                      <path d="M14.6404 20.6788C13.6696 20.6788 12.7559 20.6788 11.7852 20.6788C11.7852 17.6236 11.7852 14.5685 11.7852 11.4848C12.6703 11.4848 13.584 11.4848 14.4977 11.4848C14.4977 11.8846 14.4977 12.2843 14.4977 12.7126C14.5262 12.684 14.5548 12.684 14.5548 12.684C15.1544 11.7133 16.0395 11.285 17.153 11.2564C17.7812 11.2279 18.4094 11.3135 18.9804 11.599C19.7228 11.9417 20.1511 12.5698 20.3795 13.3408C20.5793 13.9689 20.6365 14.5971 20.6365 15.2252C20.6365 16.9955 20.6365 18.7657 20.6365 20.536C20.6365 20.5646 20.6365 20.5931 20.6365 20.6217C19.6942 20.6217 18.752 20.6217 17.7812 20.6217C17.7812 20.5646 17.7812 20.5075 17.7812 20.4218C17.7812 18.9085 17.7812 17.4238 17.7812 15.9105C17.7812 15.5679 17.7526 15.2252 17.6955 14.8826C17.5242 13.9404 16.8961 13.6263 16.0395 13.7405C15.24 13.8262 14.8117 14.3115 14.669 15.1681C14.6119 15.4822 14.6119 15.7963 14.6119 16.1104C14.6119 17.538 14.6119 18.9942 14.6119 20.4218C14.6404 20.536 14.6404 20.5931 14.6404 20.6788Z" fill="#101C26"/>
                      <path d="M7.12891 11.5129C8.07114 11.5129 9.01338 11.5129 9.95561 11.5129C9.95561 14.5681 9.95561 17.6232 9.95561 20.6783C9.01338 20.6783 8.07114 20.6783 7.12891 20.6783C7.12891 17.6232 7.12891 14.5681 7.12891 11.5129Z" fill="#101C26"/>
                      <path d="M10.1859 8.5719C10.1859 9.48558 9.44352 10.2279 8.55839 10.2565C7.64471 10.2565 6.90234 9.51413 6.90234 8.60045C6.90234 7.68677 7.64471 6.9444 8.55839 6.9444C9.44352 6.91585 10.1859 7.65822 10.1859 8.5719Z" fill="#101C26"/>
                    </svg>
                  </a>
                </li>
                <li className="footer__inner--left-socials-item">
                  <a className="footer__inner--left-socials-link" href="#">
                    <svg width="28" height="27" viewBox="0 0 28 27" className="link-img" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="0.915466" y="0.0422363" width="26.9155" height="26.9155" rx="13.4577" fill="#F0E714"/>
                      <path d="M17.0138 6.9436C17.25 6.96947 17.4599 6.96947 17.6961 6.99533C17.8535 6.99533 18.011 7.02119 18.1684 7.04706C18.1684 7.74536 18.1684 8.41781 18.1684 9.14198C18.116 9.14198 18.0372 9.14198 17.9847 9.14198C17.5386 9.14198 17.0926 9.14198 16.6465 9.16784C16.0954 9.19371 15.7805 9.4782 15.7543 10.0213C15.728 10.5903 15.7543 11.1593 15.7543 11.7542C16.5152 11.7542 17.3025 11.7542 18.0897 11.7542C17.9848 12.5301 17.8798 13.306 17.7748 14.0819C17.0926 14.0819 16.4365 14.0819 15.7543 14.0819C15.7543 16.0733 15.7543 18.0648 15.7543 20.0563C14.9408 20.0563 14.1273 20.0563 13.3138 20.0563C13.3138 18.0648 13.3138 16.0992 13.3138 14.0819C12.6316 14.0819 11.9493 14.0819 11.267 14.0819C11.267 13.306 11.267 12.5301 11.267 11.7542C11.9493 11.7542 12.6053 11.7542 13.3138 11.7542C13.3138 11.6766 13.3138 11.6507 13.3138 11.599C13.3138 10.9783 13.3138 10.3834 13.3138 9.7627C13.3401 9.03853 13.5762 8.36608 14.1011 7.79709C14.4947 7.38328 14.9933 7.15051 15.5706 7.02119C15.728 6.99533 15.8855 6.96947 16.0167 6.9436C16.3316 6.9436 16.6727 6.9436 17.0138 6.9436Z" fill="#101C26"/>
                    </svg>
                  </a>
                </li>
                <li className="footer__inner--left-socials-item">
                  <a className="footer__inner--left-socials-link" href="#">
                    <svg width="28" height="27" viewBox="0 0 28 27" className="link-img" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="0.830994" y="0.0422363" width="26.9155" height="26.9155" rx="13.4577" fill="#F0E714"/>
                      <path d="M7.73334 17.888C9.25399 18.0087 10.6577 17.6466 11.8859 16.6811C10.5992 16.5604 9.72188 15.8966 9.25399 14.6294C9.6634 14.6898 10.0728 14.6898 10.5407 14.5691C9.83884 14.388 9.31247 14.026 8.90307 13.5432C8.49366 13.0001 8.25971 12.3967 8.25971 11.6725C8.66912 11.8536 9.07853 12.0346 9.54642 12.0346C8.90307 11.5519 8.55215 11.0088 8.37669 10.2846C8.20123 9.5605 8.31821 8.83637 8.66912 8.17259C10.1898 10.0433 12.1198 11.0691 14.5178 11.2501C14.5178 10.9484 14.4593 10.707 14.5178 10.4053C14.5763 9.19844 15.4536 8.0519 16.5648 7.75018C17.6176 7.44846 18.5533 7.75018 19.3137 8.47431C19.3721 8.53465 19.4306 8.53465 19.4891 8.53465C20.074 8.41396 20.6004 8.17259 21.1852 7.87087C20.9513 8.53465 20.5419 9.07775 20.0155 9.43982C20.0155 9.43982 20.0155 9.43982 20.0155 9.50016C20.2494 9.43982 20.5419 9.37947 20.7758 9.31913C21.0098 9.25878 21.3022 9.13809 21.5362 9.07775C21.1852 9.5605 20.8343 10.0433 20.3664 10.4053C20.191 10.526 20.1325 10.6467 20.1325 10.8881C20.1325 12.2156 19.84 13.4225 19.3137 14.6294C18.6118 16.0777 17.676 17.2846 16.3309 18.1294C15.3951 18.7328 14.3423 19.0949 13.2311 19.2759C12.4707 19.3966 11.7104 19.3966 10.9501 19.2759C9.78036 18.9138 8.72761 18.5518 7.73334 17.888Z" fill="#101C26"/>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__inner--right">
            <div className="footer__inner--right-wrapper">
              <nav className="footer__inner--right-menu">
                <ul className="footer__inner--right-menu-list">
                  <li className="footer__inner--right-menu-item">
                    <p className="footer__inner--right-menu-title">Useful Link</p>
                  </li>
                  <li className="footer__inner--right-menu-item">
                    <a className="footer__inner--right-menu-link" href="#">Home</a>
                  </li>
                  <li className="footer__inner--right-menu-item">
                    <a className="footer__inner--right-menu-link" href="#">Company News</a>
                  </li>
                  <li className="footer__inner--right-menu-item">
                    <a className="footer__inner--right-menu-link" href="#">About us</a>
                  </li>
                  <li className="footer__inner--right-menu-item">
                    <a className="footer__inner--right-menu-link" href="#">Projects</a>
                  </li>
                  <li className="footer__inner--right-menu-item">
                    <a className="footer__inner--right-menu-link" href="#">Careers</a>
                  </li>
                </ul>
                <ul className="footer__inner--right-menu-list">
                  <li className="footer__inner--right-menu-item">
                    <p className="footer__inner--right-menu-title">Services</p>
                  </li>
                  <li className="footer__inner--right-menu-item">
                    <a className="footer__inner--right-menu-link" href="#">Website Design</a>
                  </li>
                  <li className="footer__inner--right-menu-item">
                    <a className="footer__inner--right-menu-link" href="#">Logo and Branding</a>
                  </li>
                  <li className="footer__inner--right-menu-item">
                    <a className="footer__inner--right-menu-link" href="#">Mobile App </a>
                  </li>
                  <li className="footer__inner--right-menu-item">
                    <a className="footer__inner--right-menu-link" href="#">Search Engine</a>
                  </li>
                </ul>
                <ul className="footer__inner--right-menu-list">
                  <li className="footer__inner--right-menu-item">
                    <p className="footer__inner--right-menu-title">Company</p>
                  </li>
                  <li className="footer__inner--right-menu-item">
                    <a className="footer__inner--right-menu-link" href="#">Carees</a>
                  </li>
                  <li className="footer__inner--right-menu-item">
                    <a className="footer__inner--right-menu-link" href="#">Contact</a>
                  </li>
                  <li className="footer__inner--right-menu-item">
                    <a className="footer__inner--right-menu-link" href="#">FAQ</a>
                  </li>
                  <li className="footer__inner--right-menu-item">
                    <a className="footer__inner--right-menu-link" href="#">Partners</a>
                  </li>
                </ul>
                <ul className="footer__inner--right-menu-list">
                  <li className="footer__inner--right-menu-item">
                    <p className="footer__inner--right-menu-title">Contact Us</p>
                  </li>
                  <li className="footer__inner--right-menu-item location-footer">
                    <a className="footer__inner--right-menu-link " href="#">41 Pilgrm Avenue, Chevy <br /> Chase, Md 20815</a>
                  </li>
                  <li className="footer__inner--right-menu-item call-footer">
                    <a className="footer__inner--right-menu-link" href="#">+01234 567 890</a>
                  </li>
                  <li className="footer__inner--right-menu-item email-footer">
                    <a className="footer__inner--right-menu-link" href="#">info@agency.com</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
