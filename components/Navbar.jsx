import styles from "../styles/Navbar.module.css";
import { signIn, signOut } from "next-auth/react";

export default function Component() {
    /*const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".navMenu");

    hamburger.addEventListener("click", ()=> {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    })
    document.querySelectorAll(".navLink").forEach(e => n.addEventListener("click", ()=> {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }))*/
    return (
        <>
            <div className={styles.container}>
                <nav className={styles.nav}>
                    <a href="/" className={styles.navBranding}>Logo</a>
                    <ul className={styles.navMenu}>
                        <li className={styles.navItem}>
                            <a href="/" className={styles.navLink}>Home</a>
                        </li>
                        <li className={styles.navItem}>
                            <a href="/bakers" className={styles.navLink}>My Account</a>
                        </li>
                        <li className={styles.navItem}>
                            <a href="/" onClick={() => signOut()} value="action" className={styles.navLink}>Log out</a>
                        </li>
                    </ul>
                    <div className={styles.hamburger}>
                        <span className={styles.bar}></span>
                        <span className={styles.bar}></span>
                        <span className={styles.bar}></span>
                    </div>
                </nav>
            </div>
        </>
    )
}