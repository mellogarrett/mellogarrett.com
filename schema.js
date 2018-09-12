const { gql } = require("apollo-server-express");
const merge = require("lodash.merge");

// types
const achievementType = require("./types/achievement");
const educationType = require("./types/education");
const jobType = require("./types/job");
const linkType = require("./types/link");
const resumeType = require("./types/resume");
const skillType = require("./types/skill");
// resolvers
const achievementResolver = require("./resolvers/achievement");
const educationResolver = require("./resolvers/education");
const jobResolver = require("./resolvers/job");
const linkResolver = require("./resolvers/link");
const resumeResolver = require("./resolvers/resume");
const skillResolver = require("./resolvers/skill");

const baseType = gql`
  type Query {
    hello: String
  }
`;

module.exports = {
  typeDefs: [
    baseType,
    achievementType,
    educationType,
    jobType,
    linkType,
    resumeType,
    skillType
  ],
  resolvers: merge(
    {},
    achievementResolver,
    educationResolver,
    jobResolver,
    linkResolver,
    resumeResolver,
    skillResolver
  )
};
