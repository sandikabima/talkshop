'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert("ProductStock", [
      { productId: 1, quantity: 100, location: 'Gudang A', createdAt: new Date(), updatedAt: new Date() },
      { productId: 2, quantity: 50, location: 'Gudang B', createdAt: new Date(), updatedAt: new Date() },
      { productId: 3, quantity: 70, location: 'Gudang C', createdAt: new Date(), updatedAt: new Date() },
      { productId: 4, quantity: 80, location: 'Gudang D', createdAt: new Date(), updatedAt: new Date() },
      { productId: 5, quantity: 40, location: 'Gudang E', createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("ProductStock", null, {});
  }
};
