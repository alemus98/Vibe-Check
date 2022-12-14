const { AuthenticationError } = require("apollo-server-express");
const { User, Mood, Solutions } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      return User.findOne({ _id: context.user._id }).populate("moods");
    },
    moods: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Mood.find(params).sort({ createdAt: -1 });
    },
  },
  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
  
  login: async (parent, { email, password }) => {
    const user = await User.findOne({ email });

    if (!user) {
      throw new AuthenticationError('No user found with this email address');
    }

    const correctPw = await user.isCorrectPassword(password);

    if (!correctPw) {
      throw new AuthenticationError('Incorrect credentials');
    }

    const token = signToken(user);

    return { token, user };
  },
  addMood: async (parent, { moodText, moodType }, context) => {
    if (context.user) {
      const mood = await Mood.create({
        moodText,
        user: context.user._id,
        moodType: moodType.toLowerCase()
      });

      await User.findOneAndUpdate(
        { _id: context.user._id },
        { $addToSet: { moods: mood._id } }
      );
      // console.log(mood.moodType)
      const solutions = await Solutions.find({ moodType: mood.moodType });
      const singleSolution = solutions[Math.floor(Math.random() * solutions.length)]
      
      return {solutionBody: singleSolution.solutionBody, moodType: mood.moodType};
    }
    throw new AuthenticationError('You need to be logged in!');
  },
},
};

module.exports = resolvers;
