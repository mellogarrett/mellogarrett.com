const { gql } = require("apollo-server-lambda");

const Resume = gql`
  type Resume {
    about: String!
    links: [Link!]!
    experience: [Jobs!]!
    education: [Education!]!
    skills: [Skill!]!
  }

  extend type Query {
    resume: Resume!
  }
`;

module.exports = Resume;
