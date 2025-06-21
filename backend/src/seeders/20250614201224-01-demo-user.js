'use strict';

const { hashPassword } = require('../helper/bcrypt');

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
    await queryInterface.bulkInsert("User", [
      {
        userName: 'Admin',
        email: 'admin@example.com',
        password: hashPassword("admin123"),
        role: 'admin',
        refresh_token: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'customer',
        email: 'customer@example.com',
        password: hashPassword("customer123"),
        role: 'customer',
        refresh_token: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'john_doe',
        email: 'john@example.com',
        password: hashPassword('john12345'),
        role: 'customer',
        refresh_token: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'jane_doe',
        email: 'jane@example.com',
        password: hashPassword('jane12345'),
        role: 'customer',
        refresh_token: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("User", null, {})
  }
};
