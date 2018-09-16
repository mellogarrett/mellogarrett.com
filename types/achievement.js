const { gql } = require("apollo-server-lambda");

const Achievement = gql`
  type Achievement {
    summary: String!
    relevantSkills: [String!]!
  }
`;

module.exports = Achievement;
