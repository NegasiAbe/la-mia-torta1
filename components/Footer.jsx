import styles from "../styles/Footer.module.css";
import { signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default function navBar(props) {
    const curUser = props.currentUser

    return (
        <>
            <div className={styles.container}>
                <nav className={styles.nav}>
                    <div >
                        <Link href="/" ><Image src="https://res.cloudinary.com/dlmrmq1tl/image/upload/v1670770166/LaMiaTorta/logo-withoutBG_sbnqri.png" height="200" width="200" alt="logo" className={styles.navBranding} /></Link>
                    </div>
                    <ul className={styles.navMenu}>
                        <li className={styles.navItem}>
                            <Link href="/" className={styles.navLink}>Home</Link>
                        </li>
                        <li className={styles.navItem}>
                            <h1>Welcom dear<span> HASSANI</span></h1>
                        </li>
                       {/*  <li className={styles.navItem}>
                            <div >
                                <Link href="/" ><Image src={curUser} height={200} width={200} alt="imageAvatar"/></Link>
                            </div>
                        </li> */}
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

export async function getServerSideProps(req, res) {
    const session = await getSession(req) //await getSession(req)
    if (!session) {
      return {
        redirect: {
          permanent: false,
          destination: `/api/auth/signin?callbackUrl=http%3A%2F%2Flocalhost%3A3000%2F`
          //change the destination default login in to cusotm login
        }
      }
    }
    const user = await db.User.findOne({ where: { email: session.user.email } })
    const stringfyuser = JSON.parse(JSON.stringify(user))
    return {
      props: { profile: stringfyuser, currentUser: session?.user || null },
    }
  }