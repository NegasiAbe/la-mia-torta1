import Link from "next/link"
import styles from "../styles/Navbar.module.css";
import { signIn, signOut } from "next-auth/react";

export default function Component(curuser) {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <img className={styles.navlogo} src="tortaImage/torta image.png"></img>
            </div>

            <div className={styles.navlink}>
                <Link href={`/`}>
                    <h4 className={styles.Home}>Home</h4>
                </Link>
            </div>

            <div className={styles.navlink}>
                <Link href={`/bakers/new`}>
                    <h4 className={styles.upload}>+upload</h4>
                </Link>
            </div>

            <div className={styles.navlink}>
                <Link href={`/`}>
                    <h4 className={styles.orders}>Orders</h4>
                </Link>
            </div>

            

            <div lassName={styles.navlink}>
                {curuser ?
                    <h4 onClick={() => signOut()} className={styles.profile}>Sign out</h4> :
                    <h4 onClick={() => signIn()} className={styles.profile}>Sign In</h4>
                }
            </div>

        </nav>
    )
}