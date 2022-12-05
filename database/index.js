import Sequelize from 'sequelize';
import config from './config/config.mjs';
import Cake from './models/cake.js';
import Order from './models/order.js';
import User from './models/user.js';

const db = {};
db.User = User;
db.Cake = Cake;
db.Order = Order;

let sequelize;
if (process.env.NODE_ENV === 'production') {
  sequelize = new Sequelize(config.production);
} else {
  sequelize = new Sequelize(config.development);
}

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.Sequelize = Sequelize;
db.sequelize = sequelize;

export default db;
