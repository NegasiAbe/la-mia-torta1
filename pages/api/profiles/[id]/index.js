// import cakesController from '../../../../controllers/cakeController'
import db from '../../../../database'

export default async function handler(req, res) {
    if (req.method === "POST") {
        const data = req.body

        console.log('first consloe ======>', data)
        const {name, lastname, email, phoneNumber, address, imageAvatar, password} = data
        //console.log('second consloe ======>', data)

        await db.User.update(data, { where: { id: req.query.id } })
        res.status(200).redirect(`/`)
    }
}