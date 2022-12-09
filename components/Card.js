import Link from "next/link"
import styles from "../styles/Card.module.css";

export default function Component({ cake }) {
  console.log('image url is ', cake.imageUrl)
  return (
    <>
      <div className={styles.card} >
        <div className={styles.cardimg}>
          <img src={cake.imageUrl} className={styles.cardimg1}/>
        </div>
        <div className={styles.cardDetails}>
          <h5>{cake.name}</h5>
          <p>{cake.description}</p>
          <p>{cake.location}</p>
          <p>{cake.price}</p>
          <a href={`/cakes/${cake.id}`} className={styles.selectOne} >
          <div className={styles.button}>Select</div>
          </a>  
        </div>

      </div>
    </>
  )
}