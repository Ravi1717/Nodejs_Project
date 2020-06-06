const express = require("express");
const bodyParser = require("body-parser");

//initialise our express app

const product = require("./routes/product.route");
const app = express();

//Set up mongoose connection
const mongoose = require("mongoose");

let DBurl =
  "mongodb+srv://ravi:ravi@12345@cluster0-lvl1j.mongodb.net/test?retryWrites=true&w=majority";

let mongoDB = DBurl;

mongoose.connect(mongoDB);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }, { useNewUrlParser: true }));
app.use("/products", product);

let port = 1234;
app.listen(port, () => {
  console.log("Server is up and running on port no:" + port);
});
