const { gql } = require("apollo-server-lambda");

const Job = gql`
  type Job {
    employer: String!
    title: String!
    timePeriod: String!
    achievements: [Achievement!]!
  }

  extend type Query {
    experience: [Job!]!
  }
`;

module.exports = Job;
