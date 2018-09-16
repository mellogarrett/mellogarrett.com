const { gql } = require("apollo-server-lambda");

const Link = gql`
  type Link {
    description: String!
    url: String!
  }

  extend type Query {
    links: [Link!]!
  }
`;

module.exports = Link;
