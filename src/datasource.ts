import {Sequelize} from "sequelize-typescript";

const datasource =  new Sequelize({
  database: "bidbidbidschema",
  dialect: "mysql",
  username: "root",
  password: "password",
  storage: ":localhost:",
  pool: {
    max: 10,
    min: 0,
    idle: 10000,
  },
});

export = datasource;
