import styles from '../styles/Home.module.css';
import db from '../database';
import Card from '../components/Card';
import Navbaker from '../components/Navcustomer'
import Sendemail from '../components/Sendemail'
//import {getSession, signIn, signOut} from 'next-auth/react'; 
import { getSession } from 'next-auth/react';
import React from "react";

export default function Home(props) {
  const curUser = props.currentUser
  //send the props current user to navbar componont 
  const cakes = props.cakes;
  return (
    <>
      <Navbaker curuser={curUser}></Navbaker>
      <div className={styles.containerImg}>
        <div className={styles.container}>
          <div className={styles.searchForm}>
            <form className={styles.serachForm} onSubmit="event.preventDefault();" role="search">
              <label className={styles.serachlabel} htmlFor="search">Serach you Cake in here ...</label>
              <input className={styles.serachinput} id="search" type="search" placeholder="Search..." autoFocus required />
              <button className={styles.serachbutton} type="submit">Go</button>
            </form>
          </div>
          <div className={styles.cards}>
            {cakes.map((cake, index) => (<Card cake={cake} key={cake.id} />))}
          </div>
        </div>
      </div>

      {props.new ?
        <Sendemail curuser={curUser} /> :
        <h4></h4>
      }
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

  let firstlogin = 0;

  const user = await db.User.findOne({ where: { email: session.user.email } })
  if (!user) {
    const name = session.user.name
    const email = session.user.email
    const password = 'Abcd?1234'
    await db.User.create({ name, email, password })
    firstlogin = 1
  }
  const cakes = await db.Cake.findAll()
  const stringfycakes = JSON.parse(JSON.stringify(cakes))

  return {
    props: { new: firstlogin, cakes: stringfycakes, currentUser: session?.user || null },
  }
}
