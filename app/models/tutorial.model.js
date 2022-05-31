module.exports = (mongoose) => {
    const tutorial = mongoose.model(
        "Tutorial",
        mongoose.Schema(
            {
                title: { type: String, required: true },
                description: {
                    type: String,
                    required: true,
                },
            },
            { timeStamps: true }
        )
    );
    return tutorial;
};
