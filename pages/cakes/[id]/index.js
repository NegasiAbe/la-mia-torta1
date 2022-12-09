import styles from '../../../styles/Select.module.css'
import Navbar from "../../../components/Navcustomer"
import cakeController from '../../../controllers/cakeController'
import { Input } from 'reactstrap'

export default function oneCake(props) {
  const cakes = props.cake
  console.log("cakes: ", cakes)
  return (
    <>
      <Navbar></Navbar>
      <h3 className={styles.wording}>You are just one step away.....</h3>
      <div class={styles.slidShow}>
        <div className={styles.rowImg}>
          <div className={styles.columnImg1}>
            <img src={cakes.imageUrl} className={styles.cardimg1} />
            <img src={cakes.imageUrl} className={styles.cardimg2} />
            <img src={cakes.imageUrl} className={styles.cardimg3} />
          </div>
          <div className={styles.columnImg2}>
            <img src={cakes.imageUrl} className={styles.cardimg4} />
          </div>
        </div>
      </div>
      <div class={styles.column}>
        <div class={styles.info}>
          <div className={styles.box4}>
            <h1>{cakes.name}</h1>
            <h4>{cakes.description}</h4>
            <h4>Price: ${cakes.price}</h4>
            <h4>{cakes.imageUrl}</h4>
            <h2>Bakery Information</h2>
            <h4>Address: {cakes.location}</h4>
            <input type="submit" className={styles.button} value="Order" />
          </div>
        </div>
      </div>
    </>
  )
}



export async function getServerSideProps(req, res) {
  const { id } = req.query
  const cake = await cakeController.find(id)
  return {
    props: { cake },
  }
}
