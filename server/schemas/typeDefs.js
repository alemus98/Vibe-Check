const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    moods: [Mood]
  }

  type Mood {
    _id: ID
    moodType: String
    moodText: String
    createdAt: String
  }
  type Auth {
    token: ID!
    user: User
  }
  type Solution {
    moodType: String
    solutionBody: String
  }
  type Query {
    me: User
    moods(username: String): [Mood]
  }
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addMood(moodType: String, moodText: String): Solution
  }
`;
module.exports = typeDefs;
