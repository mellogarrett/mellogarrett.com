const { gql } = require("apollo-server-lambda");

const Resume = gql`
  type Resume {
    about: String!
    links: [Link!]!
    experience: [Jobs!]!
    education: [Education!]!
    skills: [Skill!]!
  }
`;

module.exports = Resume;
