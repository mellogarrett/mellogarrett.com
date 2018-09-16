const { ApolloError } = require("apollo-server-lambda");
const achievementData = require("../data/achievement");

const achievements = ({ jobId }, args, ctx, info) => {
  try {
    // only return achievements for the appropriate job (parent)
    return achievementData.filter(achievement => achievement.jobId === jobId);
  } catch (err) {
    console.log('Error in the "achievements" query resolver: ', err);
    return new ApolloError(
      'Error in the "achievements" query resolver. Check server logs.'
    );
  }
};

module.exports = {
  Job: {
    achievements
  }
};
