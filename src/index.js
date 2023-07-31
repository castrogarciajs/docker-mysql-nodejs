import express from "express";

const app = express();
app.get("/", (req, res) => {
  res.json({
    message: "docker images",
  });
});

app.listen(3000);
console.log("http://localhost:300");
