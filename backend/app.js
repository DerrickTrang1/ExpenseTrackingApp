const express = require("express");
const cors = require("cors");
const { db } = require("./db/db.js");
const app = express();
require("dotenv").config();
const port = process.env.port;
const {readdirSync } = require('fs'); //file system module

//MiddleWares
app.use(express.json());
app.use(cors());

//Routes
readdirSync('./routes').map((route) => {  
  app.use('/api/v1', require('./routes/' + route ))}) //read file in routes folder => maps them to path /api/v1/route with the route being used in "./routes/route(eg. transactions.js/"


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
