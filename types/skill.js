const { gql } = require("apollo-server-lambda");

const Skill = gql`
  enum Skill {
    JavaScript
    Node
    React
    Preact
    UIDesign
    GraphQL
    PostgreSQL
    AWS
    CloudArchitecture
    Testing
    Docker
  }
`;

module.exports = Skill;
