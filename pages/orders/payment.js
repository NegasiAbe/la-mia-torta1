import Navbar from '../../components/Navbar'
import styles from '../../styles/Payment.module.css'
import { Input } from 'reactstrap'

export default function payment(props) {

    return (
        <>
            <Navbar></Navbar>
            <h2 className={styles.payment}>Payment Method</h2>

            <div className={styles.containerwrap}>
            <div className={styles.box1}>
            <div className={styles.form}>
                <form action='/'>
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