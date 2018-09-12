const { ApolloServer } = require("apollo-server-lambda");
const { typeDefs, resolvers } = require("./schema");

const server = new ApolloServer({
  typeDefs,
  resolvers
});

exports.index = server.createHandler();
