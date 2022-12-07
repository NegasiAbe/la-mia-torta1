'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Cakes', [{
      name:'Yellow', 
      description: 'Hello', 
      location:'Milano, Italia',
      price:'300',
      imageUrl:'asdasd',
      UserId: '1',
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      name:'Green', 
      description: 'Nothing', 
      location:'Milano, Italia',
      price:'350',
      imageUrl:'asdasdasd',
      UserId: '2',
      createdAt: new Date(),
      updatedAt: new Date()
     }], {});
   
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('Cakes', null, {});
  }
};
