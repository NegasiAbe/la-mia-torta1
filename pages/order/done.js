import Navbar from '../../components/navcustomer'
import styles from '../../styles/Payment.module.css'
import cakecontroller from '../../controllers/cakeController'

export default function payment (props) {
    const cake = props.cakes
    return (
        <>
        <Navbar></Navbar>
        <h2 className= {styles.payment}>Thankyou for your Orders</h2>
        <div>
            <img className={styles.giftbox} src='https://www.creativefabrica.com/wp-content/uploads/2020/11/17/Christmas-Present-Gift-Box-Asset-Vector-Graphics-6658356-2-580x387.jpg'/>
        </div>
        <h3 className={styles.summary}>Order Summary</h3>
        <div className={styles.details}>
            
        </div>
        </>
    )
}

export  async function getServerSideProps(req, res) {
    const cakes = await cakecontroller.all();
    return {
      props: { cakes },
    }
  }
