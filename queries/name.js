const { ApolloError } = require("apollo-server-lambda");

const name = (parent, args, ctx, info) => "Garrett Thompson";

module.exports = {
  Query: {
    name
  }
};
