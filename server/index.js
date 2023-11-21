const { sql } = require("@vercel/postgres");
const express = require("express");
const cors = require("cors");
const app = express();
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const multer = require("multer");
const path = require("path");
const pool = require("./src/db");
export default async function handler(request, response) {
  console.log("works");
  try {
    const result =
      await sql`CREATE TABLE Test ( Name varchar(255), Review varchar(255) );`;
    return response.status(200).json({ result });
  } catch (error) {
    return response.status(500).json({ error });
  }
}
