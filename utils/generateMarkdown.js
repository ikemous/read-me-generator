function generateMarkdown(data) {
  return `
# **${data.title}**

## Badges

## Table Of Contents
- [title](#Title)
- [How To Install](#Installation)
- [Knowledge Of Use](#Knowledge)
- [How To Test](#Use)
- [How To Contribute](#Contribute)
- [Any Questions](#Questions)

## Installation
  > ${data.installation}

## Knowledge
  ${data.userKnowledge}

## Test
  Below is the command needed to run the program :)
  > ${data.runTest}

## Contribute
  ${data.contribution}

## Questions ?

  
`;
}

module.exports = generateMarkdown;
