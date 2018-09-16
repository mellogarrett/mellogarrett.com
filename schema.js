const { gql } = require("apollo-server-lambda");
const merge = require("lodash.merge");

// types
const achievementType = require("./types/achievement");
const educationType = require("./types/education");
const jobType = require("./types/job");
const linkType = require("./types/link");
const skillType = require("./types/skill");
// resolvers
const achievementQueries = require("./queries/achievement");
const educationQueries = require("./queries/education");
const jobQueries = require("./queries/job");
const linkQueries = require("./queries/link");
const skillQueries = require("./queries/skill");
const nameQueries = require("./queries/name");
const ageQueries = require("./queries/age");
const locationQueries = require("./queries/location");
const currentEmployerQueries = require("./queries/current-employer");

const baseType = gql`
  type Query {
    name: String!
    age: Int!
    location: String!
    currentEmployer: String!
  }
`;

module.exports = {
  typeDefs: [
    baseType,
    achievementType,
    educationType,
    jobType,
    linkType,
    skillType
  ],
  resolvers: merge(
    {},
    // queries
    achievementQueries,
    educationQueries,
    jobQueries,
    linkQueries,
    skillQueries,
    nameQueries,
    ageQueries,
    locationQueries,
    currentEmployerQueries
  )
};
