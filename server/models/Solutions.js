const { Schema, model } = require("mongoose");

const solutionsSchema = new Schema({
  solutionBody: {
    type: String,
    required: true,
    maxlength: 280,
  },

  moodType: {
    type: String,
    required: true,
  },
});
const Solutions = model("Solutions", solutionsSchema);

module.exports = Solutions;
