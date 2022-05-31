module.exports = (mongoose) => {
    const project = mongoose.model(
        "Project",
        mongoose.Schema({
            title: {
                type: String,
                required: true,
            },
            description: {
                type: String,
                required: true,
            },
        })
    );
};
