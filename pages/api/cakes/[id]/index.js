import cakesController from '../../../../controllers/cakeController'

export default async function handler(req, res) {
    /*  console.log('the methode is :',req.method) */
    if (req.method === 'POST') {
        console.log('update me please')
        const cake = await cakesController.update(req.query.id, req.body)
        return res.status(200).redirect(`/bakers/`)
    }
    res.status(200).json({ msg: req.method })
}