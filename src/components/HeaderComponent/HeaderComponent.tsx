import { useEffect, useRef } from "react";
import { MenuButton } from "../MenuButton/MenuButton";
import { useClickOutside } from "../../hooks/useClickOutside";
import { Link } from "react-scroll";
import logo from "../../img/logo.svg";
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu, openMenu, closeMenu } from '../../store/menuSlice';
import { RootState } from '../../store/store';
import { AppDispatch } from '../../store/store';
import { isTopOfPageProps } from '../../types/nav'

const HeaderComponent: React.FC<isTopOfPageProps> = ({ isTopOfPage }) => {
   const headerBackground = isTopOfPage ? "" : "#101c26e6";

  const isOpen = useSelector((state: RootState) => state.menu.isOpen);
  const dispatch = useDispatch<AppDispatch>();
  const menuRef = useRef<HTMLElement>(null!) as React.RefObject<HTMLElement>;

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

  return (
    <header className="header" style={{backgroundColor: headerBackground}}>
      <div className="container">
        <div className="header__inner">
          <span className="header__logo"><img src={logo} alt="logo" /></span>
          <nav className={`header__nav ${isOpen ? "active" : ""}`} ref={menuRef}>
            <ul className="header__nav-list">
              <li className="header__nav-item">
                <Link 
                  to="top" 
                  spy={true}
                  smooth={true}
                  className="header__nav-link" 
                >
                  Home
                </Link>
              </li>
              <li className="header__nav-item">
                <Link 
                  to="about" 
                  spy={true}
                  smooth={true}
                  className="header__nav-link" 
                >
                  About
                </Link>
              </li>
              <li className="header__nav-item">
                <Link 
                  to="why-choose" 
                  spy={true}
                  smooth={true}
                  className="header__nav-link" 
                >
                  Why choose us
                </Link>
              </li>
              <li className="header__nav-item">
                <Link 
                  to="our-services" 
                  spy={true}
                  smooth={true}
                  className="header__nav-link" 
                >
                  Our services
                </Link>
              </li>
              <li className="header__nav-item">
                <Link 
                  to="our-contacts" 
                  spy={true}
                  smooth={true}
                  className="header__nav-link" 
                >
                  Contact
                </Link>
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

export default HeaderComponent;
