const express = require("express");
const cors = require("cors");
const { db } = require("./db/db.js");
const app = express();
require("dotenv").config();
const port = process.env.port;

//MiddleWares
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Get Request");
});

const server = () => {
  app.listen(port, () => {
    db();
    console.log("Listening on port", port);
  });
};

server();
