const express = require("express");
const db = require("./db");
const app = express();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

app.use(express.json());

app.post("/register", async (req, res) => {
  try {
    const { firstName, lastName } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    let user = "insert into  ";
    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ error: "Registration failed" });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { firstName, lastName } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ error: "Authentication failed" });
    }
    const passwordMatch = await bcrypt.compare(lastName, person.lastName);
    if (!passwordMatch) {
      return res.status(401).json({ error: "Authentication failed" });
    }
    const token = jwt.sign({ userId: user._id }, "your-secret-key", {
      expiresIn: "1h",
    });
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: "Login failed" });
  }
});

app.get("/people", async function (req, res) {
  console.log("in people");
  try {
    let result = await db.query("select * from person");
    res.send(result);
  } catch (error) {}
  res.status(404).send(error.message);
});

app.get("/people/:id", async function (req, res) {
  let id = req.params.id;
  try {
    let result = await db.query("SELECT * FROM person where id = ?", [id]);
    res.send(result);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

app.delete("/people/:id", async function (req, res) {
  let id = req.params.id;
  try {
    let result = await db.query("Delete From person where id = ?; ", [id]);
    res.send(result);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

app.post("/people", async function (req, res) {
  console.log("inside post");
  let person = req.body;
  let sql = "insert into person (FirstName, LastName) values(?,?)";
  try {
    let result = await db.query(sql, [person.firstName, person.lastName]);
    res.send(result);
  } catch (error) {
    res.status(404).send(error.message);
  }

  // res.send(req.body);
});

app.listen(3003);
