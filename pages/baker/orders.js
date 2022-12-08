import styles from '../../styles/Baker.module.css';
import Navbaker from '../../components/navbaker';
import db from '../../database';
import Card from '../../components/Card';

import { getSession } from 'next-auth/react';

export default function bakerOrder(props) {
  const curUser = props.currentUser;
  console.log(props)

  //send the props current user to navbar componont 
  const orders = props.orders;
  return (
    <>
      <Navbaker curuser={curUser}></Navbaker>
      <div className={styles.containerImg}>
      <div className={styles.container}>    
        <dev className={styles.cards}>
          {orders.map(order => (<h1 key={order.id}><Card cake={order} key={order.id} /></h1>))}
        </dev>
      </div>
      </div>
    </>
  )
}
export async function getServerSideProps(req, res) {
  const session = await getSession(req) //await getSession(req)
  console.log('session is:', session.user.email)
  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: `/api/auth/signin?callbackUrl=http%3A%2F%2Flocalhost%3A3000%2F`
        //change the destination default login in to cusotm login
      }
    }
  }
  const owner = await db.User.findOne({where:{email:session.user.email}})
  if(owner){
    const orders = await db.Order.findAll({where:{UserId:owner.id}})
  }
  else{
    throw `There is no order with user ${session.user.email}`
  }
  const stringfyOrders = JSON.parse(JSON.stringify(orders))

  return {
    props: { orders: stringfyOrders, currentUser: session?.user || null },
  }
}