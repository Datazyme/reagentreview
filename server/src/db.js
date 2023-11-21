const { sql } = require("@vercel/postgres");
const Pool = require("pg").Pool;
require("dotenv").config();

const config = {
  postgresurl: process.env.POSTGRES_URL,
  postgrespooling: process.env.POSTGRES_URL_NON_POOLING,
  postgresprisma: process.env.POSTGRES_PRISMA_URL,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DATABASE
};

const pool = new Pool(config);
