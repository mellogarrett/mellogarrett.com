const { ApolloError } = require("apollo-server-lambda");
const achievementData = require("../data/achievement");

// get distinct skills from achievements
const skills = (parent, args, ctx, info) => {
  try {
    // get the "relevantSkills" for each achievement
    // and create a unique set of skills.
    const skills = [
      ...new Set(
        achievementData.reduce((skills, achievement) => {
          return [...skills, ...achievement.relevantSkills];
        }, [])
      )
    ];

    return skills;
  } catch (err) {
    console.log('Error in the "skills" query resolver: ', err);
    return new ApolloError(
      'Error in the "skills" query resolver. Check server logs.'
    );
  }
};

module.exports = {
  Query: {
    skills
  }
};
