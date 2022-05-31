require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./app/models");
/* VARIABLES */
const PORT = process.env.PORT;
var corsOptions = {
    origin: "http://localhost:8081",
};
const app = express();

app.use(cors(corsOptions));
// parse request of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// simple route
app.get("/", (req, res) => {
    res.json({ message: `squad2gether API V1` });
});
// set port and listen for requests
app.listen(PORT, () => {
    console.log(`server listening in port: ${PORT}`);
});
db.mongoose
    .connect(db.url, { useNewUrlParser: true })
    .then(() => {
        console.log(`Connected to Database: ${db.url}`);
    })
    .catch((err) => {
        console.log({ "Cannot connect to the database": err.message });
        process.exit();
    });
