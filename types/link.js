const { gql } = require("apollo-server-lambda");

const Link = gql`
  type Link {
    description: String!
    url: String!
  }
`;

module.exports = Link;
