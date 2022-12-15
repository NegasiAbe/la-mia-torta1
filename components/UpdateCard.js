import Link from "next/link"
import Image from "next/image"
import styles from "../styles/UpdateCard.module.css";

export default function Component({ cake }) {
  return (

    <div className={styles.card} >
      <div className={styles.cardimg}>
        <img src={cake.imageUrl} className={styles.cardimg1} />
      </div>
      <div className={styles.cardDetails}>
        <div className={styles.topDetails}>
          <h5>{cake.name}</h5>
          <p className={styles.description}>{cake.description}</p>
          <h6>{cake.location}</h6>
          <h6>{cake.price}</h6>
        </div>
        <div className={styles.downDetails}>
          <Link className={styles.selectOne1} href={`/cakes/${cake.id}/edit`}>
            <div className={styles.edit}>Edit</div>
          </Link>
          <Link className={styles.selectOne2} href={`/api/cakes/${cake.id}/delete`}>
            <div className={styles.Delete}>Delete</div>
          </Link>
        </div>
      </div>
    </div>
  )
}
