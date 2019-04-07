import {Sequelize} from "sequelize-typescript";

const datasource =  new Sequelize({
  database: "bidbidbidschema",
  dialect: "mysql",
  username: "bbb",
  password: "PI9C3zZGFIigUA",
  storage: "bbb-dev.crqowmd3qvd6.ap-southeast-1.rds.amazonaws.com",
  pool: {
    max: 10,
    min: 0,
    idle: 10000,
  },
});

export = datasource;
