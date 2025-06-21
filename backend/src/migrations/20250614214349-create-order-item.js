'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('OrderItem', {
      orderItemId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      orderId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Order',
          key: 'orderId',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      productId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Product',
          key: 'productId',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      quantity: {
        type: Sequelize.INTEGER
      },
      price: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('OrderItem');
  }
};