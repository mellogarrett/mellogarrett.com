const { gql } = require("apollo-server-lambda");

const Education = gql`
  type Education {
    institution: String!
    timePeriod: String!
    summary: String!
  }
`;

module.exports = Education;
