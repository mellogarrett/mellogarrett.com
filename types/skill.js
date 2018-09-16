const { gql } = require("apollo-server-lambda");

const Skill = gql`
  extend type Query {
    skills: [String!]!
  }
`;

module.exports = Skill;
