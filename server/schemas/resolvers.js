const { AuthenticationError } = require("apollo-server-express");
const { User, Mood } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, { id }, context) => {
      return Mood.findOne({ user: id }).populate("User");
    },
  },
  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
  },
  
};

module.exports = resolvers;
