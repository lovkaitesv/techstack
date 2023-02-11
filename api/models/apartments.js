const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class apartments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  apartments.init({
    rooms: DataTypes.INTEGER,
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'apartments',
  })
  return apartments
}