const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");


const solutionsSchema = new Schema({
  solutionBody: {
    type: String,
    required: true,
    maxlength: 280,
  },

  username: {
    type: String,
    required: true,
  },

  solutionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
});

const moodSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },

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

    solutions: [solutionsSchema],
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
