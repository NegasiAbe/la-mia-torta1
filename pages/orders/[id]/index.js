import Navbar from '../../../components/Navbar'
import styles from '../../../styles/Payment.module.css'
import ordersController from '../../../controllers/orderController'
export default function Order (props) {
    const order = props.order
    
    return (
        <>
        <Navbar></Navbar>
        <h2 className= {styles.payment}>Thankyou for your Orders</h2>

        <form method='POST' action='/api/orders/confirmation'>
        <div className= {styles.details}>
            <h3 className={styles.summary}>Order Summary</h3>
            <h4>orderID#{order.id}</h4>
            <h4>cake is:{order.Cake.name}</h4>
            <h4>status: {order.status}</h4>
            <input type="submit" className={styles.button} value="Confirm"/>
        </div>
        </form>    
        </>
    )
}

export  async function getServerSideProps(req, res) {
    // select the order by id 
    //select the cake
    //pass as props
    const { id } = req.query

    const order = await ordersController.find(id);
    return {
      props: { order },
    }
  } 
 