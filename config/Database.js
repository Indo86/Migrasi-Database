import { Sequelize } from "sequelize";

// Nyambungin db ke BE
const db = new Sequelize("data_user_coba", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
