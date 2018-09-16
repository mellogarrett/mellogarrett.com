const { ApolloServer } = require("apollo-server-lambda");
const { typeDefs, resolvers } = require("./schema");
const defaultQuery = require("./default-query");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: {
    tabs: [
      {
        name: "Resumé",
        endpoint: "https://mellogarrett.com",
        query: defaultQuery
      }
    ]
  }
});

exports.handler = server.createHandler();
