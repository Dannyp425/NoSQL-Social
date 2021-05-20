const { Schema, model } = require("mongoose");
const dateFormat = require('../utils/dateFormat');

const ThoughtSchema = new Schema(
    {   
        thoughtText: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        },
        username: {
            type: String,
            required: true
        },
        reaction: []
    }
);

const Thought = model("Thought", ThoughtSchema);

module.exports = Thought;