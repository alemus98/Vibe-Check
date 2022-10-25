const db = require("../config/connection");
const { User, Mood, Solutions } = require("../models");
const userSeeds = require("./userSeeds.json");
const moodSeeds = require("./moodSeeds.json");

db.once("open", async () => {
  try {
    await Mood.deleteMany({});
    await User.deleteMany({});

    await User.create(userSeeds);

    for (let i = 0; i < moodSeeds.length; i++) {
      const { _id, username, moodType } = await Mood.create(
        moodSeeds[i]
      );
      const solutionData = await Solutions.create({ moodType, solutionBody:moodSeeds[i].solutionBody });
  
      const user = await User.findOneAndUpdate(
        { username: username },
        {
          $addToSet: {
            moods: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log("all done!");
  process.exit(0);
});
