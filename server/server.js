const express = require("express");
const { restart } = require("nodemon");
const app = express();

/get request
app.get("/api", (req, res) => {
    res.json({"users":["user1","user2","user3"]})
  });


//server listen
app.listen(5000, () => {console.log("Server started on 5000")})
