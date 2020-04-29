function generateMarkdown(data) {
    const usersChoices = [...data.userChoice];
    let choiceBadges = "";

    for(let i = 0; i < usersChoices.length;i++)
      choiceBadges += `![made-with-${usersChoices[i]}](https://img.shields.io/badge/Made%20with-${usersChoices[i]}-1f425f.svg) \n`;

    console.log(choiceBadges);
    

  return `
# **${data.title}**

## Badges
`
+ choiceBadges +

`
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

[![Ask Me Anything !](https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg)](https://GitHub.com/Naereen/ama)

`;
}

module.exports = generateMarkdown;
