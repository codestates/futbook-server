const dotenv = require("dotenv");
dotenv.config();

const config = {
  development: {
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: "futbook_Dev",
    host: process.env.DATABASE_HOST,
    dialect: "mysql",
  },
  production: {
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: "futbook",
    host: process.env.DATABASE_HOST,
    dialect: "mysql",
  },
};

module.exports = config;
