const { Schema, model } = require('mongoose');

const moodSchema = new Schema(
    {
        description: {
            type: String,
            required: true,
        }
    }
)


module.exports = Mood;