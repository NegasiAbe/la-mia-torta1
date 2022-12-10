import styles from "../styles/Card.module.css";

export default function Orderscard({ cake }) {
    /* console.log('the name ', cake.Cake) */
    return (
        <>
            <div className={styles.card}>
                {cake.Cake ?
                    <div>
                        <div className={styles.cardimg}>
                            <img src={cake.Cake.imageUrl} className={styles.cardimg1} />
                        </div>
                        <div className={styles.cardDetails}>
                            <div className={styles.topDetails}>
                                <h5>{cake.Cake.name}</h5>
                                <p>{cake.status}</p>
                                <p>{cake.Cake.description}</p>
                                <p>{cake.Cake.location}</p>
                                <p>{cake.Cake.price}</p>
                            </div>
                            <div className={styles.downDetails}>
                                <a href={`/cakes/${cake.id}`} className={styles.selectOne} >
                                    <div className={styles.button}>Select</div>
                                </a>
                            </div>
                        </div>
                    </div> :
                    <div className={styles.cardDetails}>
                        <div className={styles.topDetails}>
                            <p>{cake.status}</p>
                        </div>
                        <div className={styles.downDetails}>
                            <a href={`/cakes/${cake.id}`} className={styles.selectOne} >
                                <div className={styles.button}>Select</div>
                            </a>
                        </div>
                    </div>
                }
            </div>
        </>
    )
}