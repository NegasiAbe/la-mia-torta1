import styles from '../../../styles/SelectOne.module.css'
import Navbar from "../../../components/Navbar"
import cakeController from '../../../controllers/cakeController'
import { getSession } from 'next-auth/react'
import db from '../../../database'

export default function oneCake(props) {
  const cake = props.cake
  const curUser = props.currentUser
  const user = props.profile
  return (
    <>
      <Navbar curuser={curUser} profile={user}></Navbar>
      <div className={styles.container}>
        <div className={styles.slidShow}>
          <div className={styles.rowImg}>
            <div className={styles.columnImg1}>
              <img src={cake.imageUrl} className={styles.cardimg1} />
              <img src={cake.imageUrl} className={styles.cardimg2} />
              <img src={cake.imageUrl} className={styles.cardimg3} />
            </div>
            <div className={styles.columnImg2}>
              <img src={cake.imageUrl} className={styles.cardimg4} />
            </div>
          </div>
          <div className={styles.detailsRow}>
            <div className={styles.detailsCul1}>
              <h1>{cake.name}</h1>
              <h4>{cake.description}</h4>
              <h4>Address: {cake.location}</h4>
            </div>
            <div className={styles.detailsCul2}>
              <h4>Price: {cake.price}$</h4>
              <form method='POST' action='/api/orders/create' className={styles.form}>
                <input type="number" hidden name="CakeId" value={cake.id}/>
                <input type="submit" className={styles.btn} value="Order" />
              </form>
            </div>
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
  const profile = JSON.parse(JSON.stringify(user))
  const { id } = req.query
  const cake = await cakeController.find(id)
  return {
    props: {profile: profile, cake, currentUser: session?.user || null },
  }
}
