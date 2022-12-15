import Link from "next/link"
import styles from "../styles/OrdersCard.module.css";

export default function Component(orders) {
  return (
    <>
      <div className={styles.card} >
        <div className={styles.cardimg}>
          <img src={orders.cake.Cake.imageUrl} className={styles.cardimg1} alt="cardImage"/>
        </div>
        <div className={styles.cardDetails}>
          <div className={styles.topDetails}>
            <h5>{orders.cake.Cake.name}</h5>
            <p className={styles.description}>{orders.cake.Cake.description}</p>
            <h6>{orders.cake.Cake.location}</h6>
            <h6>{orders.cake.Cake.price}$</h6>
          </div>
          <div className={styles.downDetails}>
            <Link href={`/orders/${orders.cake.id}`} className={styles.selectOne}>
              <div className={styles.button}>Status</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
