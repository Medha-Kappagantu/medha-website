import React, {useState} from "react";
import styles from "./Navbar.module.css";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return <nav className={styles.navbar}> 
        <a className={styles.title} href="/"> Medha Kappagantu </a>
        <div className={styles.menu}>
            <img className={styles.menuBtn}
                src={menuOpen ? 
                    "assets/nav/closeIcon2.png"
                    : "assets/nav/menuIcon1.png" }
                alt="menu-button" 
                height="40px" 
                width="40px"
                onClick={() => setMenuOpen(!menuOpen)}
                />
            <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                onClick={() => setMenuOpen(false)}
            >
                <li>
                    <a href="#about"> About </a>
                </li>
                <li>
                    <a href="#experience"> Experience </a>
                </li>
                <li>
                    <a href="#awards"> Awards </a>
                </li>
                <li>
                    <a href="#contact"> Contact </a>
                </li>
            </ul>
        </div>
        </nav>;
};