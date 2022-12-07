import cakeController from "../../../controllers/cakeController"
export default async function handler(req, res) {
    if(req.method=="POST"){
    const{ name, description, price, location, imageUrl} = req.body
        const UserId = 1
        console.log(name, description, price, location, imageUrl)
    const cake = await cakeController.create({
        name, description, price, location, imageUrl, UserId
    })
}
    res.status(200).redirect(`/`);

  }
  