import styles from '../../styles/profile.module.css';
import db from '../../database';
import Navbar from '../../components/Navbar';
//import {getSession, signIn, signOut} from 'next-auth/react'; 
import { getSession } from 'next-auth/react';
import { Input } from 'reactstrap';



export default function getProfile(props) {
  const curUser = props.currentUser;
  //send the props current user to navbar componont 
  const user = props.profile;
  /* console.log('the user is :',user) */
  return (
    <>
      <Navbar curuser={curUser}></Navbar>
      <div className={styles.container}>
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Change your <span>Profile</span></h2>
          <div className={styles.cardBody}>
            <form method="POST" action={`/api/profiles/${user.id}`}>
              <div className={styles.formGroup}>
                <label htmlFor="firstname">First Name</label><br />
                <Input className={styles.formControl} type="text" name='name' id="firstname" placeholder={user.name} />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="lastname">Last Name</label><br />
                <Input className={styles.formControl} name='lastName' id="lastname" type="text" placeholder={user.LastName} />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label><br />
                <Input className={styles.formControl} name='inputEmail' id="email" type="email" placeholder={user.email} />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="password">Password</label><br />
                <Input className={styles.formControl} name='password' id="password" type="password" placeholder={user.password} />
              </div>
              <div className={styles.formGroup1}>
                <Input className={styles.btn} type="submit" value="Apply"/>
                <br />
              </div>
            </form>
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
  const user = await db.User.findOne({ where: { email: session.user.email } })
  const stringfyuser = JSON.parse(JSON.stringify(user))
  return {
    props: { profile: stringfyuser, currentUser: session?.user || null },
  }
}