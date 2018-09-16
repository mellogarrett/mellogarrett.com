const defaultQuery = `# Hi! 
#
# I'm Garrett, and this is my 
# resumé in the form of a GraphQL API.
# This API is running in AWS Lambda 
# and the code can be seen at: 
# https://github.com/mellogarrett/mellogarrett.com

query {
  name
  experience {
    title
    employer
    timePeriod
    achievements {
      summary
      relevantSkills
    }
  }
  education {
    degreeOrConcentration
    institution
    timePeriod
    summary
  }
  skills
  links {
    description
    url
  }
}`;

module.exports = defaultQuery;
