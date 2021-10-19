const sequelize = require("sequelize");
const config = require("../config/dataBaseConfig");

const dataBase = new sequelize(config.dataBase, config.user, config.password, {
  host: config.host,
  dialect: config.dialect,
  define: { timestamp: false },
  pool: {
    max: config.pool.max,
    min: config.pool.min,
    acquire: config.pool.acquire,
    idle: config.pool.idle,
  },
});

async () => {
  try {
    await dataBase.authenticate();
    console.log(
      `the connection to ${dataBase.dataBase} has been established successfully`
    );
  } catch (error) {
    console.error(`Unable to connect to ${dataBase.dataBase}`);
  }
};
module.exports = dataBase;
