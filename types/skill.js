const { gql } = require("apollo-server-lambda");

const Skill = gql`
  type Skill {
    technology: String!
  }
`;

module.exports = Skill;
