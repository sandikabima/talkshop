'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Products.belongsTo(models.Categories, { foreignKey: 'categoryId' });
      Products.hasMany(models.ProductStock, { foreignKey: 'productId' });
      Products.hasMany(models.CartItem, { foreignKey: 'productId' });
      Products.hasMany(models.OrderItem, { foreignKey: 'productId' });
    }
  }
  Products.init({
    productId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.INTEGER,
    imageUrl: DataTypes.STRING,
    categoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
    freezeTableName: true
  });
  return Products;
};