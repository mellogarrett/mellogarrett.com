const { gql } = require("apollo-server-lambda");

const Achievement = gql`
  type Achievement {
    summary: String!
    relevantSkill: Skill!
  }
`;

module.exports = Achievement;
