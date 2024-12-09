import React, { useState } from "react";
import { menuList } from "./menu";
import styles from "../../styles/sidebar.module.css";
import "../../styles/colors.css";
import Link from "next/link";

const SidebarMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const openMenuLink = (e) => {
    setOpenMenu(!openMenu);
    // e.target.classList.toggle(styles.menuTitleActive);
  };
  return (
    <div className={styles.sidebar}>
      {menuList.map((menu) => (
        <ul key={menu.id} className={styles.menuList}>
          <li className={styles.menu}>
            {menu.icon}
            <span className={styles.menuTitle} onClick={openMenuLink}>
              {menu.title}
            </span>
          </li>
          <ul className={openMenu ? styles.menuTitleActive : styles.menuItems}>
            {menu.items.map((item, index) => (
              <li key={index}>
                <Link href={item.path}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </ul>
      ))}
    </div>
  );
};

export default SidebarMenu;
