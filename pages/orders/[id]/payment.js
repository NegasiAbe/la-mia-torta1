import Navbar from '../../../components/Navbar'
import styles from '../../../styles/Payment.module.css'
import { Input } from 'reactstrap'
import ordersController from '../../../controllers/orderController'
import { getSession } from 'next-auth/react'
import db from '../../../database'


export default function payment(props) {
  const order = props.order
  const curUser = props.currentUser
  const user = props.profile
  console.log(props.currentUser)

  return (
    <>
      <Navbar curuser={curUser} profile={user}></Navbar>
      <h2 className={styles.payment}>Insert Your Card Details</h2>

      <div className={styles.containerwrap}>
        <div className={styles.box1}>
          <div className={styles.form}>
            <form action={`/api/orders/${order.id}/payment`}>
              <div >
                <Input type="text" placeholder="your full name.." className={styles.name} id="fullname" />
              </div>
              <div >
                <Input type="number" placeholder='insert card no..' className={styles.cardno} id="card no" />
              </div>
              <div className={styles.wrap}>
                <div>
                  <Input type="text" placeholder='MM/YYYY' className={styles.date} id="date" />
                </div>
                <div>
                  <input type="number" placeholder="CVV" className={styles.security} id='security' />
                </div>
              </div>
              <div >
                <input type="submit" className={styles.btn} value="Submit" /><br />
              </div>
            </form>
          </div>
        </div>
        <div className={styles.box2}>
          <img className={styles.visacard} src="https://www.braintreepayments.com/images/features/payment-methods/payment-methods.png"></img>
        </div>
      </div>



    </>
  )
}

//get servier side to have the order
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

  const { id } = req.query
  const order = await ordersController.find(id)
  const stringfyOrders = JSON.parse(JSON.stringify(order))
  const user = await db.User.findOne({ where: { email: session.user.email } })
  const profile = JSON.parse(JSON.stringify(user))
  return {
    props: {profile: profile, order: stringfyOrders, currentUser: session?.user || null },
  }
}