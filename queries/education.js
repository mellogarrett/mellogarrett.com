const { ApolloError } = require("apollo-server-lambda");
const educationData = require("../data/education");

const education = (parent, args, ctx, info) => {
  try {
    return educationData;
  } catch (err) {
    console.log('Error in the "education" query resolver: ', err);
    return new ApolloError(
      'Error in the "education" query resolver. Check server logs.'
    );
  }
};

module.exports = {
  Query: {
    education
  }
};
