import cakesController from '../../../../controllers/cakeController'

export default async function handler(req, res) {
    if(req.method === 'GET'){
        const cake = await cakesController.delete(req.query.id)
    return res.status(200).redirect(`/bakers`)
    }
    res.status(200).json({msg: req.method})
}