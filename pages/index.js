import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar2'
//import {getSession, signIn, signOut} from 'next-auth/react'; 

import { signIn, signOut } from "next-auth/react";
import { getSession } from 'next-auth/react';

export default function Home(props) {
  const curUser = props.currentUser;
  return (
    <>
      <Navbar></Navbar>
        <h1 className={styles.heading}>La Mia Torta Home Page</h1>
      
      {curUser ?
        <button onClick={() => signOut()}>Sign out</button> :
        <button onClick={() => signIn()}>Sign in</button>
      }
    </>
  )
}

export async function getServerSideProps(req, res) {
  const session = await getSession(req) //await getSession(req)
  console.log('session is', session)
/*      if (!session) {
   return {
     redirect: {
       permanent: false,
       destination: `profile`
     }
   }
 }  */

  return {
    props: { currentUser: session?.user || null},
}
}

