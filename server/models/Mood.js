const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const moodSchema = new Schema(
  {
    moodType: {
      type: String,
    },

    moodText: {
      type: String,
      minLength: 1,
      maxLength: 280,
    },

    moodImage: {
      type: String,
    },

    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

const Mood = model("Mood", moodSchema);

module.exports = Mood;
