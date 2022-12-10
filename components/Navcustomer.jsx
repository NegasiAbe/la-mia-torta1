import Link from "next/link"
import styles from "../styles/Navbar.module.css"
//import { Menu } from '@headlessui/react'
import React from "react";

import { signIn, signOut } from "next-auth/react";

export default function Component({ curuser }) {

    return (<div>
        {/* {console.log('the user in navbar is', curuser.props.children)} */}

        <nav className={styles.navbar}>
            <div className={styles.logo}>
               {/*  <Image src='https://tse1.mm.bing.net/th?id=OIP.qOt_5rWJneT6ZgdY57duVwHaFj&pid=Api&rs=1&c=1&qlt=95&w=143&h=107'
                 alt="Picture of the logo" width={50} height={50} 
                className={styles.navlogo}/> */}
            </div>
            <div className={styles.navlink}>
                <Link href={`/`}>
                    <h4 className={styles.Home}>Home</h4>
                </Link>
            </div>
          
            <div className="dropdown">                
            {curuser ?
                    <h4 onClick={() => signOut()} value="action">Sign Out</h4>:
                    <h4 onClick={() => signIn()} value="action">Sign In</h4>
                    }
                <select>
                    <option value="email">email</option>        {/* {curuser.curuser.email}   {curuser.curuser.name}  */}        
                    <option value="name">full name</option>
                </select>
            </div>
        </nav>
    </div>
    )
}