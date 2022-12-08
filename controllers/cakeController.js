import db from '../database'

const cakesController = {
  
  all: async () => {
    const cakes = await db.Cake.findAll()
    const parsedCakes = JSON.parse(JSON.stringify(cakes))
    return parsedCakes
  },
  find: async (id) => {
    const cake = await db.Cake.findByPk(id)
    const parsedCake = JSON.parse(JSON.stringify(cake))
    return parsedCake
  },
  create: async (data) => {
    console.log(data)
    const cake = await db.Cake.create(data)
    return JSON.parse(JSON.stringify(cake))
  },
  allOrders: async () => {
    const cake = await db.Cake.findAll({
      include: {
        model: db.Order
      }
    })
    const parsedCake = JSON.parse(JSON.stringify(cake))
    return parsedCake
  },
  
}

export default cakesController
