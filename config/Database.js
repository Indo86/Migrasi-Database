import { Sequelize } from "sequelize";

const db = new Sequelize("data_user_coba", "root", "password123", {
  host: "34.56.154.227",
  dialect: "mysql",
});

export default db;
