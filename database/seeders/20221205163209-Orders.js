'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Orders', [{
      UserID: 1,
      CakeID: 1,
      status:"requested",
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {

      await queryInterface.bulkDelete('Orders', null, {});
  }
};
