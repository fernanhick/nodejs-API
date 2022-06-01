module.exports = (app) => {
    const projects = require("../controllers/project.controller");
    var router = require("express").Router();

    //Create a new Project
    router.post("/", projects.create);
    // Createa a route to obtain all records
    router.get("/", projects.getAll);
    // Create router to obtain record based on ID
    router.get("/:id", projects.getById);
    // create router for to Update record based on the ID
    router.patch("/:id", projects.update);
    //Create a route for deleting a record
    router.delete("/:id", projects.delete);
    //Create the route to delete all records
    router.delete("/", projects.deleteAll);

    //Create a route for comments added to projects
    router.post("/:id/comment", projects.addComment);

    app.use("/api/V1/projects", router);
};
