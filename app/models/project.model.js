module.exports = (mongoose) => {
    const project = mongoose.model(
        "Project",
        mongoose.Schema(
            {
                title: {
                    type: String,
                    required: true,
                },
                description: {
                    type: String,
                    required: true,
                },
                members: {
                    type: Array,
                },
                comments: [
                    {
                        type: mongoose.Schema.Types.ObjectId,
                        ref: "Comment",
                    },
                ],
            },
            { timestamps: true }
        )
    );
    return project;
};
