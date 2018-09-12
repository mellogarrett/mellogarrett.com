const { gql } = require("apollo-server-express");

const baseSchema = gql`
  type Query {
    hello: String
  }
`;

module.exports = {
  typeDefs,
  resolvers
};
