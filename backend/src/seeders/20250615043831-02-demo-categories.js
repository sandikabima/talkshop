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

    await queryInterface.bulkInsert("Categories", [
      { name: 'T-Shirts & Polos', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Pants & Jeans', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Hats & Caps', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Shoes & Sneakers', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Accessories', createdAt: new Date(), updatedAt: new Date() },
    ])
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Categories", null, {})
  }
};
