const { ApolloError } = require("apollo-server-lambda");
const linkData = require("../data/link");

const links = (parent, args, ctx, info) => {
  try {
    return linkData;
  } catch (err) {
    console.log('Error in the "links" query resolver: ', err);
    return new ApolloError(
      'Error in the "links" query resolver. Check server logs.'
    );
  }
};

module.exports = {
  Query: {
    links
  }
};
