const { ApolloError } = require("apollo-server-lambda");
const jobData = require("../data/job");

const jobs = (parent, args, ctx, info) => {
  try {
    return jobData;
  } catch (err) {
    console.log('Error in the "jobs" query resolver: ', err);
    return new ApolloError(
      'Error in the "jobs" query resolver. Check server logs.'
    );
  }
};

module.exports = {
  Query: {
    experience: jobs
  }
};
