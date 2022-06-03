module.exports = (mongoose) => {
    const comments = mongoose.model(
        "Comment",
        mongoose.Schema(
            {
                text: {
                    type: String,
                    trim: true,
                    required: true,
                },
                post: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Project",
                },
                author: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "User",
                },
            },
            { timestamps: true }
        )
    );
    return comments;
};
