// server.js
const Pool = require("pg").Pool;
require("dotenv").config();

// Replace these with your PostgreSQL connection details

const config = {
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DATABASE,
  port: process.env.POSTGRES_PORT
};

const pool = new Pool(config);

module.exports = pool;
