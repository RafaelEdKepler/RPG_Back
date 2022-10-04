const {Model, DataTypes} = require("sequelize");
const sequelize = require("../config/database");

class Info extends Model {}

Info.init(
  {
    name: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING
    },
    obs: {
      type: DataTypes.STRING
    },
    language: {
      type: DataTypes.STRING,
    },
    size: {
      type: DataTypes.STRING,
    },
    domain: {
      type: DataTypes.STRING,
    },
    actualLocation: {
      type: DataTypes.STRING,
    },
    active: {
      type: DataTypes.INTEGER,
      defaultValue: 1
    },
    x_mouse: {
      type: DataTypes.INTEGER,
    },
    y_mouse: {
      type: DataTypes.INTEGER
    }
  },
  {
    sequelize,
    modelName: "Info",
    timestamps: true
  }  
)

module.exports = Info