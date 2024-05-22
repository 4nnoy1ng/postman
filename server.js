const express = require("express");
const db = require("./db");
const app = express();

app.use(express.json());

const people = [
  { Name: "Anna", Alter: 25 },
  { Name: "Ben", Alter: 35 },
  { Name: "Clara", Alter: 42 },
  { Name: "David", Alter: 29 },
  { Name: "Eva", Alter: 31 },
];

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
