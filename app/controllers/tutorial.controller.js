const db = require("../models");
const Tutorial = db.tutorials;

//Create and Save a new Tutorial
exports.create = (req, res) => {
    try {
        const data = new Tutorial({
            title: req.body.title,
            description: req.body.description,
        });
        data.save();
        res.status(200).json(data);
    } catch (error) {
        console.log({ error: error.message });
    }
};

exports.findAll = async (req, res) => {
    try {
        const data = await Tutorial.find();
        res.send(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.findOne = async (req, res) => {
    const id = req.params.id;
    try {
        const data = await Tutorial.findById(id);
        res.send(data);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

exports.update = async (req, res) => {
    const id = req.params.id;
    try {
        await Tutorial.findOneAndUpdate(id, req.body);
        res.status(200).send(`Record updated`);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

exports.delete = async (req, res) => {
    const id = req.params.id;
    const data = await Tutorial.findById(id);
    try {
        await Tutorial.deleteOne(data);
        res.status(200).send(`Record with id: ${id} Deleted`);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

exports.deleteAll = async (req, res) => {
    try {
        await Tutorial.deleteMany();

        res.status(200).send("Records Deleted ");
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
};
