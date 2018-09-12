const { gql } = require("apollo-server-lambda");

const Achievement = gql`
  type Achievement {
    summary: String!
    relevantSkills: [Skill!]!
  }
`;

module.exports = Achievement;
