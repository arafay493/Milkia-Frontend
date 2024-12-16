// import React, { useState } from "react";
// import { menuList } from "./menu";
// import styles from "../../styles/sidebar.module.css";
// import "../../styles/colors.css";
// import Link from "next/link";

// const SidebarMenu = () => {
//   const [openMenu, setOpenMenu] = useState(false);
//   const openMenuLink = (e) => {
//     setOpenMenu(!openMenu);
//     // e.target.classList.toggle(styles.menuTitleActive);
//   };
//   return (
//     <div className={styles.sidebar}>
//       {menuList.map((menu) => (
//         <ul key={menu.id} className={styles.menuList}>
//           <li className={styles.menu}>
//             {menu.icon}
//             <span className={styles.menuTitle} onClick={openMenuLink}>
//               {menu.title}
//             </span>
//           </li>
//           <ul className={openMenu ? styles.menuTitleActive : styles.menuItems}>
//             {menu.items.map((item, index) => (
//               <li key={index}>
//                 <Link href={item.path}>{item.label}</Link>
//               </li>
//             ))}
//           </ul>
//         </ul>
//       ))}
//     </div>
//   );
// };

// export default SidebarMenu;

import React, { useState } from "react";
import { menuList } from "./menu";
import Link from "next/link";
import styles from "../../styles/sidebar.module.css";
import { usePathname, useRouter } from "next/navigation";
import { motion, HTMLMotionProps } from "motion/react";
// import "../../styles/colors.css";
// import Link from "next/link";

const SidebarMenu = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const router = useRouter();
  const pathname = usePathname();

  const toggleMenu = (id) => {
    setActiveMenu(activeMenu === id ? null : id);
  };
  return (
    // <div style={styles.sidebar}>
    //   <div style={styles.searchBox}>
    //     <input
    //       type="text"
    //       placeholder="Search Property"
    //       style={styles.searchInput}
    //     />
    //   </div>
    //   {menuList.map((menu) => (
    //     <div key={menu.id} style={styles.menu}>
    //       <div style={styles.menuHeader} onClick={() => toggleMenu(menu.id)}>
    //         <div style={styles.icon}>{menu.icon}</div>
    //         <div style={styles.title}>{menu.title}</div>
    //       </div>
    //       {activeMenu === menu.id && (
    //         <div style={styles.subMenu}>
    //           {menu.items.map((item, index) => (
    //             <div key={index} style={styles.subMenuItem}>
    //               <Link href={item.path} style={styles.link}>
    //                 {item.label}
    //               </Link>
    //             </div>
    //           ))}
    //         </div>
    //       )}
    //     </div>
    //   ))}
    // </div>
    <div className={styles.sidebar}>
      <div className={styles.searchBox}>
        <input
          type="text"
          placeholder="Search Property"
          className={styles.searchInput}
        />
      </div>
      {menuList.map((menu) => (
        <div key={menu.id} className={styles.menu}>
          <div
            className={styles.menuHeader}
            onClick={() => toggleMenu(menu.id)}
          >
            <div className={styles.icon}>{menu.icon}</div>
            <div className={styles.title}>{menu.title}</div>
          </div>
          {activeMenu === menu.id && (
            <div className={styles.subMenu}>
              <motion.ul
                // className={styles.subMenu}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{
                  duration: 0.3,
                  ease: "linear",
                }}
              >
                {menu.items.map((item, index) => (
                  <Link key={index} href={item.path} className={styles.link}>
                    <li
                      className={`${styles.subMenuItem} ${
                        pathname === item.path ? styles.active : ""
                      }`}
                    >
                      {item.label}
                    </li>
                  </Link>
                ))}
              </motion.ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

// const styles = {
//   sidebar: {
//     width: "250px",
//     backgroundColor: "#5fc9d7",
//     padding: "10px",
//     color: "#fff",
//     fontFamily: "Arial, sans-serif",
//   },
//   searchBox: {
//     marginBottom: "20px",
//   },
//   searchInput: {
//     width: "100%",
//     padding: "8px",
//     borderRadius: "4px",
//     border: "none",
//   },
//   menu: {
//     marginBottom: "10px",
//   },
//   menuHeader: {
//     display: "flex",
//     alignItems: "center",
//     cursor: "pointer",
//     padding: "10px",
//     backgroundColor: "#48a4b3",
//     borderRadius: "4px",
//   },
//   icon: {
//     marginRight: "10px",
//   },
//   title: {
//     fontWeight: "bold",
//   },
//   subMenu: {
//     marginTop: "10px",
//     marginLeft: "20px",
//   },
//   subMenuItem: {
//     marginBottom: "5px",
//   },
//   link: {
//     color: "#fff",
//     textDecoration: "none",
//   },
// };

export default SidebarMenu;
