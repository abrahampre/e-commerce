const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    id:{
      type:DataTypes.INTEGER,//use special sequilize DataTypes object provide what type of data it is
      allowNull:false,//this is the equivelant of sqls NOT NULL option
      primaryKey: true, //instruct that this si the primary key
      autoIncrement:true
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull:false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
