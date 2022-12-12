import ordersController from "../../../../controllers/orderController";
import db from '../../../database'

export default async function handler(req, res) {
    if (req.method === "POST") {
        // changing to confirmed for the status
        
        const {id} = await ordersController.confirm(req.query.id)
        const order = await ordersController.create({ status: "confirmed for payment" }) 
        res.status(200).redirect(`/orders/${order.id}/`)
    }
    
}

