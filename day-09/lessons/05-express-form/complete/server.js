import express from "express";

const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send(`
    <form method="POST" action="/submit">
      <input name="name" placeholder="Your name" />
      <input name="email" placeholder="Your email" />
      <button>Submit</button>
    </form>
  `);
});

app.post("/submit", (req, res) => {
  const { name, email } = req.body;
  console.log("Form submission:");
  console.log(name, email);

  res.send(`Thanks for submitting, ${name}`);
});

app.listen(3000);
