import Navbar from '../../../components/Navbar'
import styles from '../../../styles/Payment.module.css'
import { getSession } from 'next-auth/react';
import db from '../../../database';

export default function Order(props) {
    const order = props.order
    console.log(order)

    const curUser = props.currentUser
    return (
        <>
            <Navbar curuser={curUser}></Navbar>
            <h2 className={styles.payment}>Order Summary</h2>
            <form method='POST' action={`/api/orders/${order[0].id}/confirm`}>
                <div className={styles.details}>
                    <h4>orderID# {order[0].id}</h4>
                    <h4>You have ordered for: {order[0].Cake.name}</h4>
                    <h4>The price is: ${order[0].Cake.price}</h4>
                    <h4>status: {order[0].status}</h4>

                    {order[0].status == "confirmed" ?
                        <input type="submit" className={styles.button} value="Go To Payment" /> :
                        order[0].status == "paid" ?
                            <input type="hidden" className={styles.button} value="Confirm" /> :
                            <input type="submit" className={styles.button} value="Confirm" />
                    }

                </div>
            </form>
        </>
    )
}

export async function getServerSideProps(req, res) {

    const { id } = req.query
    //const order = await ordersController.find(id);
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
    const order = await db.Order.findAll({
        where: { id: id },
        include: [{ model: db.Cake }]
    })

    const stringifyorder = JSON.parse(JSON.stringify(order))
    return {
        props: { order: stringifyorder, currentUser: session?.user || null },
    }

}