import cakesController from '../../../../controllers/cakeController'

export default async function handler(req, res) {
    if(req.method === 'POST'){
        const cake = await cakesController.create(req.query.id, req.body)
        res.status(200).redirect(`/cakes/${cake.id}`)
    }
    res.status(200).json({msg: req.method})
}