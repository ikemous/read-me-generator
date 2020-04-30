function generateMarkdown(data) {

    const usersChoices = [...data.userChoice];
    let choiceBadges = "";
    let website = "";

    for(let i = 0; i < usersChoices.length;i++)
    {
      let color;
      switch(usersChoices[i])
      {
        case "Node":
          website = "https://nodejs.org/en/"
          color = "brightgreen";
          break;
        case "Javascript":
          website = "https://www.javascript.com/";
          color = "yellow";
          break;
        case "HTML":
          website = "https://www.w3schools.com/html/";
          color = "orange";
          break;
        case "CSS":
          website = "https://www.w3schools.com/css/";
          color = "blue";
          break;      
        case "JQuery":
          website = "https://jquery.com/";
          color = "black";
          break;
        case "React":
          website = "https://reactjs.org/";
          color = "blue";
          break;
        default:
          break;
      }
      choiceBadges += `[![Using](https://img.shields.io/badge/using-${usersChoices[i]}-${color})](${website}) \n`;
    }

    

  return `
# ${data.title}

## Made With **Love**
--------------------------

`
+ choiceBadges +

`
## Table Of Contents
--------------------------

- [Languages Used](##Made-With-Love)
- [User Story](#User-Story)
- [How To Install](##Installation)
- [How To Use](##How-To-Use)
    - [Information Needed](###Information-Needed)
    - [How To Test](###How-To-Test)
- [How To Contribute](##Contribute)
- [Any Questions](##Questions)

## User Story
--------------------------

AS A ${data.userStoryPart1} \n
I WANT TO ${data.userStoryPart2} \n
SO THAT I ${data.userStoryPart3} \n

## Installation
--------------------------

Below is the code needed to install dependencies for this project
> ${data.installation}

## How To Use
---------------------------

### Information Needed
${data.userKnowledge}

### How To Test
--------------------------

Below is the command needed to run the program :)
> ${data.runTest}

## How To Contribute
--------------------------

${data.contribution}

## Questions
--------------------------

![image of contributer](${data.avatar}) \n
If there are any issues or questions about this project, you may contact ${data.name} directly at <${data.email}>

[![Visit My GitHub](https://img.shields.io/badge/Visit%20My%20GitHub-Click%20Me-1abc9c.svg)](${data.gitURL})


`;
}

module.exports = generateMarkdown;
