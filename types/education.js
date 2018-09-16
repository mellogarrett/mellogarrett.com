const { gql } = require("apollo-server-lambda");

const Education = gql`
  type Education {
    institution: String!
    timePeriod: String!
    degreeOrConcentration: String!
    summary: String!
  }

  extend type Query {
    education: [Education!]!
  }
`;

module.exports = Education;
