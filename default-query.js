const defaultQuery = `
# Hi! I'm Garrett, and this is my Resumé in the form of a GraphQL API

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
}
`;

module.exports = defaultQuery;
