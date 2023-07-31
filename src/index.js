import express from "express";
import { createPool } from "mysql2";

const app = express();

const pool = createPool({
  host: "localhost",
  user: "root",
  password: "root123",
  port: "3306",
});

app.get("/", async (req, res) => {
  const query = pool.query("SELECT NOW()");

  res.json({
    message: "docker images",
    query: query[0],
  });
});

app.listen(3000);
console.log("http://localhost:300");
