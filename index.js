const express = require("express");
const app = express();
const PORT = 4090;

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

app.get("/api/digits", (req, res) => {
  res.send(numbers);
});

app.get("/api/ping", (req, res) => {
  res.send("pong");
});

app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
});
