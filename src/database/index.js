const { Sequelize } = require("sequelize");
const dontenv = require('dotenv');
dontenv.config();
const sequelize = new Sequelize(process.env.DATABASE, process.env.DATABASE_USERNAME, process.env.DATABASE_PASSWORD, {

   host: 'localhost',
   dialect: 'postgres',

});

const checkDbConnection = async () => {
   try {
      await sequelize.authenticate();
      console.log("Connection has been established successfully.");
   } catch (error) {
      console.error("Unable to connect to the database:", error);
   }
}

module.exports = { sq: sequelize, checkDbConnection };