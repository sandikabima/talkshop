'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductStocks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ProductStocks.belongsTo(models.Product, { foreignKey: 'productId' });
    }
  }
  ProductStocks.init({
    productStockId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    productId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    location: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ProductStock',
    freezeTableName: true
  });
  return ProductStocks;
};