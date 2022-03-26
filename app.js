const express = require("express");
const res = require("express/lib/response");
const app = express();
const cors = require("cors");

const gebru = [
  { id: 1, name: "Aaftab", dob: "04-12-1996", age: 25 },
  { id: 2, name: "Albert", dob: "21-11-1992", age: 29 },
  { id: 3, name: "Alfie", dob: "10-06-1999", age: 22 },
  { id: 4, name: "Amarachi", dob: "19-08-1999", age: 22 },
  { id: 5, name: "Andrew", dob: "19-03-1997", age: 25 },
  { id: 6, name: "Claire", dob: "06-03-1995", age: 27 },
  { id: 7, name: "Dan", dob: "26-02-1998", age: 23 },
  { id: 8, name: "David", dob: "16-12-1997", age: 24 },
  { id: 9, name: "Diren", dob: "22-04-1997", age: 24 },
  { id: 10, name: "Doreen", dob: "25-07-1997", age: 24 },
  { id: 11, name: "Jianli", dob: "28-10-1996", age: 25 },
  { id: 12, name: "Jagan", dob: "19-08-1976", age: 46 },
  { id: 13, name: "Khari", dob: "", age: 0 },
  { id: 14, name: "Libby", dob: "23-08-1997", age: 24 },
  { id: 15, name: "Michael", dob: "", age: 0 },
  { id: 16, name: "Naomi", dob: "23-04-1998", age: 23 },
  { id: 17, name: "Onur", dob: "25-03-2000", age: 22 },
  { id: 18, name: "Prishal", dob: "02-04-1996", age: 25 },
  { id: 19, name: "Robyn", dob: "17-11-1995", age: 26 },
  { id: 20, name: "Thayaan", dob: "12-03-1997", age: 25 },
  { id: 21, name: "Trina", dob: "12-05-1995", age: 24 },
  { id: 22, name: "Yusra", dob: "11-11-1997", age: 24 },
];

app.get("/", (req, res) => {
  res.send("Welcome to our Cohort!");
});

app.get("/gebru", (req, res) => {
  res.send(gebru);
});

app.get("/gebru/:id", (req, res) => {
  console.log(req.query);
  const studentId = req.params.id - 1;
  const selectedStudent = gebru[studentId];
  res.send(selectedStudent);
});

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
});

// const requestListener = (req, res) => {
//     let body = { message: "Hello from the other side!" };
//     res.statusCode = 200;
//     res.end(JSON.stringify(body));
// }

app.use(cors());

module.exports = app;
