import db from '../database'

const flatsController = {
  create: async (data) => {
    const cake = await db.Cake.create({
        name, description, price, location, imageUrl, UserId
    })
    return JSON.parse(JSON.stringify(cake))
  }
}

export default flatsController
