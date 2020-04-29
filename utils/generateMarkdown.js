function generateMarkdown(data) {

    const usersChoices = [...data.userChoice];
    let choiceBadges = "";

    for(let i = 0; i < usersChoices.length;i++)
    {
      let color;
      switch(usersChoices[i])
      {
        case "Node":
          color = "brightgreen";
          break;
        case "Javascript":
          color = "yellow";
          break;
        case "HTML":
          color = "orange";
          break;
        case "CSS":
          color = "blue";
          break;      
        case "JQuery":
          color = "black";
          break;
        case "React":
          color = "blue";
          break;
        default:
          break;
      }
      choiceBadges += `![made-with-${usersChoices[i]}](https://img.shields.io/badge/Made%20With-${usersChoices[i]}-${color}) \n`;
    }

    

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
