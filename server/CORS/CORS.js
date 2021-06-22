const express = require("express");
const axios = require("axios");
const app = express();
const port = 3001;

// For parsing application/json
app.use(express.json());

// For parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
// Set up home route
app.post("/users", async (req, res) => {
  const { page, count } = req.body;
  console.log(page, count);
  const data = await axios.get(
    `http://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${count}`
  );
  console.log(data.data);
  res.send(data.data);
});

app.listen(port, () => {
  console.log(`Success! Your application is running on port ${port}.`);
});
