const express = require("express");

const app = express();

const mongoose = require("mongoose");

const bodyParser = require("body-parser");

const cors = require("cors");

//var env = require("dotenv").config({ path: "DB_CONNECTION" });

const connectString =
  "mongodb+srv://ravi:ravi@12345@cluster0-lvl1j.mongodb.net/test?retryWrites=true&w=majority";
//MIDDLEWARES
app.use(cors());
app.use(bodyParser.json());

//Import Routes
const postsRoute = require("./routes/posts");

app.use("/posts", postsRoute);

//Routes

app.get("/", (req, res) => {
  res.send("we are on home");
});

//Connect to DB

mongoose.connect(
  connectString,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected to DB");
  }
);

//how do start listening to server

app.listen(3000);
