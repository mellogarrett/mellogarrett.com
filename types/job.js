const { gql } = require("apollo-server-lambda");

const Job = gql`
  type Job {
    employer: String!
    title: String!
    timePeriod: String!
    achievements: [Archievement!]!
  }
`;

module.exports = Job;
