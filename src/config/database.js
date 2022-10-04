const Sequelize = require("sequelize");

const sequelize = new Sequelize("rpg", "admin", "admin", {
  dialect: "sqlite",
  host: "./rpg.sqlite"
})

module.exports = sequelize;