import express from "express";

const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send(`Hello from the home route`);
});

app.listen(3000);
