import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Home page");
});

app.get("/api", (req, res) => {
  res.json({ message: "Hello API" });
});

app.listen(3000);
