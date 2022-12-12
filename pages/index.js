import styles from '../styles/Home.module.css';
import db from '../database';
import Card from '../components/Card';
import Navbar from '../components/Navbar'
import { useEffect, useState } from "react";
//import {getSession, signIn, signOut} from 'next-auth/react'; 

import { getSession } from 'next-auth/react';

export default function Home(props) {
  const curUser = props.currentUser;
  //send the props current user to navbar componont 

  const [query, setQuery] = useState("");
  const [cakes, setCakes] = useState(props.cakes);
  useEffect(() => {
    //if(query.length === 0 || query.length > 0)
    setCakes(props.cakes.filter(cake => cake.name.toLowerCase().includes(query) || 
    cake.description.toLowerCase().includes(query) || 
    cake.location.toLowerCase().includes(query)))
  }, [query])
  
  return (
    <>
      <Navbar curuser={curUser}></Navbar>
      <div className={styles.containerImg}>
        <div className={styles.container}>
          <div className={styles.searchBar}>
            <input className={styles.search} type="text" placeholder="Search..."  onChange={(e) => setQuery(e.target.value)}/>
          </div>
          <div className={styles.cards}>
            {cakes.map((cake, index) => (<Card cake={cake} key={cake.id} />))}
          </div>
        </div>
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
  const cakes = await db.Cake.findAll()
  const stringfycakes = JSON.parse(JSON.stringify(cakes))

  return {
    props: { cakes: stringfycakes, currentUser: session?.user || null },
  }
}
