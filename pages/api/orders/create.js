import ordersController from '../../../controllers/orderController'
import db from '../../../database'
import { authOptions } from '../auth/[...nextauth]'
import { unstable_getServerSession } from "next-auth/next"

export default async function handler(req, res) {
    if (req.method === "POST") {
        // TODO take the title and description from the request body

        const session = await unstable_getServerSession(req, res, authOptions)
        const UserId = (await db.User.findOne({ where: { email: session.user.email } })).id
        
        const order = await ordersController.create({ UserId: UserId, status: "pending", ...req.body }) //req.body gives the cakeid
        res.status(200).redirect(`/orders/${order.id}`)
    }
    
}