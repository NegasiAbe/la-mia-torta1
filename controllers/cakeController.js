import db from "../database"
 const cakeController ={
create: async (data) => {
  console.log(db.models)
    const cake = await db.Cake.create(data)
    return JSON.parse(JSON.stringify(cake))
  }
 }
export default cakeController