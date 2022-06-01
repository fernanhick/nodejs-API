//import the index file where all the models are imported
const db = require("../models");
// Initiate instance of the project models as Project
const Project = db.projects;
const Comment = db.comments;

/*
 *   Create Each logical functionality for the Project Model and exports
 */

//create and export the arrow function calles create and pass the parameters req, res
exports.create = async (req, res) => {
    try {
        // create a new project and store the data in a const so this can be passed later orn
        const data = new Project({
            title: req.body.title,
            description: req.body.description,
            members: req.body.members,
        });
        data.save();
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

//Create and export function for obtaining all record from the Projects collection in the database

exports.getAll = async (req, res) => {
    try {
        const data = await Project.find().populate("comments");
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
//Create and export function for obtaining record based on the ID
exports.getById = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Project.findById(id).populate("comments");
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
//Create and export function for updating record based on the id
exports.update = async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    try {
        /* const data =  */ await Project.findByIdAndUpdate(id, body);
        res.status(200).json(`Record with id ${id} has been updated`);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
exports.delete = async (req, res) => {
    const id = req.params.id;

    try {
        const data = await Project.findById(id);
        if (!data) {
            res.status(400).json({ error: "Record not found" });
        } else {
            /* const obj =  */ await Project.findByIdAndRemove(id);
            res.status(200).json({ message: `Record ${id} Deleted` });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
exports.deleteAll = async (req, res) => {
    try {
        await Project.deleteMany();
        res.status(200).json({ Message: "All records have been deleted" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.addComment = async (req, res) => {
    //get the id of the Project
    const id = req.params.id;
    // Get data from body
    const data = new Comment({
        text: req.body.text,
        post: id,
    });
    // save data
    await data.save();
    // Get particular Project
    const projectRelated = await Project.findById(id);
    //Push the comment into the project
    projectRelated.comments.push(data);
    // Save and redirect
    try {
        await projectRelated.save();
        res.status(200).json({ message: "Comment Submitted" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
