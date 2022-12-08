import styles from '../../styles/Baker.module.css';
import Navbar2 from '../../components/navbar2';
import db from '../../database';
import Card from '../../components/Card';
import Navbar1 from '../../components/navbar1'
//import {getSession, signIn, signOut} from 'next-auth/react'; 

import { getSession } from 'next-auth/react';

export default function Home(props) {
  const curUser = props.currentUser;
  console.log(props)

  //send the props current user to navbar componont 
  console.log("QASEM", props)
  const cakes = props.cakes;
  return (
    <>
      <Navbar1 curuser={curUser}></Navbar1>
      <div className={styles.containerImg}>
      <div className={styles.container}>
        
        <dev className={styles.cards}>
          {cakes.map((cake, index) => (<h1 key={cake.id}><Card cake={cake} key={cake.id} /></h1>))}
        </dev>
      </div>
      </div>
    </>
  )
}
export async function getServerSideProps(req, res) {
  const session = await getSession(req) //await getSession(req)
  console.log('session is', session)
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
