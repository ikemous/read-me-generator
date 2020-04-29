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
      choiceBadges += `![Using](https://img.shields.io/badge/using-${usersChoices[i]}-${color}) \n`;
    }

    

  return `
# ${data.title}

## Made With Love
`
+ choiceBadges +

`
## Table Of Contents
- [Languages Used](##Made-With-Love)
- [User Story](#User-Story)
- [How To Install](##Installation)
- [How To Use](##How-To-Use)
    - [Information Needed](###Information-Needed)
    - [How To Test](###How-To-Test)
- [How To Contribute](##Contribute)
- [Any Questions](##Questions)

## User Story
  ${data.userStory}

## Installation
  Below is the code needed to install dependencies for this project
  > ${data.installation}

## How To Use
  ### Information Needed
    ${data.userKnowledge}

  ### How To Test
    Below is the command needed to run the program :)
    > ${data.runTest}

## How To Contribute
  ${data.contribution}

## Questions
![image of contributer](${data.avatar}) \n
If there are any issues or questions about this project, you may contact ${data.name} directly at ${data.email}

[![Visit My GitHub](https://img.shields.io/badge/Visit%20My%20GitHub-Click%20Me-1abc9c.svg)](${data.gitURL})


`;
}

module.exports = generateMarkdown;
