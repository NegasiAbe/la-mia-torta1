import Link from "next/link"
import Image from "next/image"
import styles from "../styles/Card.module.css";

export default function Component({ cake }) {
  console.log('image url is ', cake.imageUrl)
  return (
    <Link href={`/cakes/${cake.id}`}>
      <div className={styles.card} >
        <div className={styles.cardimg}>
          <Image alt="cake image" height={100} width={100} src={cake.imageUrl}/>
        </div>
        <div className={styles.cardDetails}>
          <h5>{cake.name}</h5>
          <p>{cake.description}</p>
          <p>{cake.location}</p>
          <p>{cake.price}</p>
    
          
        </div>

      </div>
    </Link>
  )
}