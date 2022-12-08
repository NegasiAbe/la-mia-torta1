import cakeController from "../../controllers/cakeController"
import cake from "../../database/models/cake"
export default function Home({cake}){

    return (
        <>
        {flat.map(item => {
           return <h2>Id: {item.id}</h2>
        }
        )}
        </>
    )
}

export async function getServerSideProps(req, res) {
    const cake = await cakeController.allOrders()
    return {
      props: { cake },
    }
  }