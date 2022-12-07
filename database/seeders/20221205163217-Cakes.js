'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Cakes', [{
      name:'Chocolate Cake', 
      description: ' a cake flavored with melted chocolate, cocoa powder, or both', 
      location:'Milano, Italia',
      price:'300',
      imageUrl:'asdasd',
      UserId: '1',
<<<<<<< HEAD
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      name:'Blue', 
      description: 'Hello', 
      location:'Milano, Italia',
      price:'300',
      imageUrl:'asdasd',
      UserId: '1',
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      name:'Red', 
      description: 'Hello', 
      location:'Milano, Italia',
      price:'300',
      imageUrl:'asdasd',
      UserId: '1',
=======
>>>>>>> be5ec86712429c3ee3707943887e7a8e37336fe6
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      name:'Stawberry Cake', 
      description: 'Strawberry cake is typically made of strawberries and sweetened whipped cream', 
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
