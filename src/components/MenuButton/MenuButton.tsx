import React from "react";
import styles from "../../styles/menu-button/index.module.scss";
import { MenuButtonProps } from '../../types/nav'

export const MenuButton: React.FC<MenuButtonProps> = ({ isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.header__menu_button} ${isActive ? `${styles.active}` : `${styles.unactive}`}`}
    >
      <span></span>
    </button>
  );
};
