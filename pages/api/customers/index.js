/* //import ordersController from '../../../controllers/orderController'


export default async function handler(req, res) {
    console.log('the body from api is :',req.body)
    
    // Take the orders info from the request body
    /* const{UserId, CakeId, status} = req.body
    console.log(UserId, CakeId, status) */
    
     /*  const order = await ordersController.create({
        UserId, CakeId, status}) */
    // the redirect metod sends the user to the specified path
     //res.status(200).redirect(`/order`) */

import styles from '../../styles/Baker.module.css';
import Navbar from '../../components/Navbar';

import db from '../../../database';

export default function summary(props) {
  const order = props.orders;
  console.log(order)

  
  return (
    <>
      <Navbar></Navbar>
      <h2 className= {styles.payment}>Thankyou for your Orders</h2>

        <form method='PUT' action='/orders/payment'>
        <div className= {styles.details}>
            <h3 className={styles.summary}>Order Summary</h3>
            <h4>orderID#{order.UserId}</h4>
            <h4>cake is:{order.CakeId}</h4>
            <h4>status: {order.status}</h4>
            <input type="submit" className={styles.button} value="Confirm"/>
        </div>
        </form>
         </>
  )
}
export async function getServerSideProps(req, res) {
 
  let cakes = await db.Cake.findAll({ where: { CakeId: cakes.CakeId } })
  const order= await db.Order.findOne({ where: { orderId: order.UserId } })
 
  const stringfycakes = JSON.parse(JSON.stringify(cakes))
  return {
    props: { order, cakes },
  }
}
