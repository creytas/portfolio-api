const dataBaseConfig = {
  host: process.env.HOST || "localhost",
  user: process.env.USER || "root",
  password: process.env.PASSWORD || null,
  dataBase: process.env.DATABASE || "portfolio",
  dialect: "mysql",
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
module.exports = dataBaseConfig;
