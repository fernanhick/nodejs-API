const dbConfig = require("../config/db.config");
const mongoose = require("mongoose");

// SET  to use promise standard globally, this is an code
// mongoose.Promise = global.Promise;
// create and object called db
const db = {};

// SET db.mongoose to the instance called from mongoose
db.mongoose = mongoose;
//SET the url to connect the using the cdConfig variable
db.url = dbConfig.url;
db.tutorials = require("./tutorial.model")(mongoose);
db.projects = require("./project.model")(mongoose);
db.comments = require("./comment.model")(mongoose);
module.exports = db;
