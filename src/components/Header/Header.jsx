// src/components/Header/Header.js
import React, { useEffect, useRef } from "react";
import { MenuButton } from "../MenuButton/MenuButton";
import { useClickOutside } from "../../hooks/useClickOutside";
import "./Header.scss";
import logo from "../../img/logo.svg";
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu, openMenu, closeMenu } from '../../store/menuSlice';

export const Header = () => {
  const isOpen = useSelector((state) => state.menu.isOpen);
  const dispatch = useDispatch();
  const menuRef = useRef(null);

  useClickOutside(menuRef, () => {
    if (isOpen) setTimeout(() => dispatch(closeMenu()), 50);
  });

  useEffect(() => {
    let startTouchX = 0;
    let endTouchX = 0;
    let startTouchY = 0;
    let endTouchY = 0;

    document.addEventListener("touchstart", (event) => {
      startTouchX = event.changedTouches[0].pageX;
      startTouchY = event.changedTouches[0].pageY;
    });

    document.addEventListener("touchend", (event) => {
      endTouchX = event.changedTouches[0].pageX;
      endTouchY = event.changedTouches[0].pageY;
      if (
        startTouchX < 100 &&
        Math.abs(endTouchY - startTouchY) < 40 &&
        endTouchX > startTouchX
      ) 
        dispatch(openMenu());
      if (
        startTouchX < 240 &&
        Math.abs(endTouchY - startTouchY) < 40 &&
        endTouchX < startTouchX
      ) 
        dispatch(closeMenu());
    });
  }, [dispatch]);

  const scrollUp = (id, e) => {
    e.preventDefault();
    const element = document.getElementById(id);
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <span className="header__logo"><img src={logo} alt="logo" /></span>
          <nav className={`header__nav ${isOpen ? "active" : ""}`} ref={menuRef}>
            <ul className="header__nav-list">
              <li className="header__nav-item">
                <a href="#top" className="header__nav-link" onClick={(e) => scrollUp("top", e)}>Home</a>
              </li>
              <li className="header__nav-item">
                <a href="#about" className="header__nav-link" onClick={(e) => scrollUp("about", e)}>About</a>
              </li>
              <li className="header__nav-item">
                <a href="#why-choose" className="header__nav-link" onClick={(e) => scrollUp("why-choose", e)}>Why choose us</a>
              </li>
              <li className="header__nav-item">
                <a href="#our-services" className="header__nav-link" onClick={(e) => scrollUp("our-services", e)}>Our services</a>
              </li>
              <li className="header__nav-item">
                <a href="#our-contacts" className="header__nav-link" onClick={(e) => scrollUp("our-contacts", e)}>Contact</a>
              </li>
              <li className="header__nav-item mobile">
                <a href="#" className="header__nav-sign-in">Sign in</a>
              </li>
              <li className="header__nav-item mobile">
                <a href="#" className="header__nav-sign-up">Sign up</a>
              </li>
            </ul>
          </nav>
          <div className="header__nav-actions">
            <a href="#" className="header__nav-sign-in">Sign in</a>
            <a href="#" className="header__nav-sign-up">Sign up</a>
          </div>
          <MenuButton isActive={isOpen} onClick={() => dispatch(toggleMenu())} />
        </div>
      </div>
    </header>
  );
};
