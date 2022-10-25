const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
  }

  type Mood {
    _id: ID
    moodType: String
    moodText: String
    createdAt: String
    user: User
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
    me(id: ID!): Mood
    
  }
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;
module.exports = typeDefs;
