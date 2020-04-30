const generateLicenseBadges = (badgeChoices) =>{

  let licenseBadges = "";

  badgeChoices.forEach(badge => {
    switch(badge)
    {
      case "Apache2.0":
        licenseBadges += "[![License: Apache2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0) \n";
        break;
      case "BSD203":
        licenseBadges += "[![License: BSD203](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause) \n";
        break;
      case "BSD201":
        licenseBadges += "[![License: BSD202](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause) \n";
        break;
      case "EPL201":
        licenseBadges += "[![License: EPL201](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0) \n";
        break;
      case "MIT":
        licenseBadges += "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) \n";
        break;
      case "ISC":
        licenseBadges += "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC) \n";
        break;
      default:
        break;
    }

  });

  return licenseBadges;
}

const generateLanguageBadges = (badgeChoices) => {
  
  let choiceBadges = "";

  badgeChoices.forEach(badge => {
    switch(badge)
    {
      case "Node":
        choiceBadges += "[![Using Node](https://img.shields.io/badge/Using-Node-brightgreen)](${https://nodejs.org/en/}) \n";
        break;
      case "Javascript":
        choiceBadges += "[![Using Javascript](https://img.shields.io/badge/Using-Javascript-yellow)](${https://www.javascript.com/}) \n";
        break;
      case "HTML":
        choiceBadges += "[![Using HTML](https://img.shields.io/badge/Using-HTML-orange)](https://www.w3schools.com/html/) \n";
        break;
      case "CSS":
        choiceBadges += "[![Using CSS](https://img.shields.io/badge/Using-CSS-blue)](https://www.w3schools.com/css/) \n";
        break;      
      case "JQuery":
        choiceBadges += "[![Using JQuery](https://img.shields.io/badge/Using-JQuery-black)](https://jquery.com/) \n";
        break;
      case "React":
        choiceBadges += "[![Using React](https://img.shields.io/badge/Using-React-blue)](https://reactjs.org/) \n";
        break;
      default:
        break;
    }
  });

  return choiceBadges;
}

function generateMarkdown(data) {

  let licenseBadges = generateLicenseBadges(data.license);
  let choiceBadges = generateLanguageBadges(data.languages); 

  return `
# ${data.title}
## Table Of Contents
- [Languages Used](##Made-With-Love)
- [User Story](#User-Story)
- [How To Install](##Installation)
- [How To Use](##How-To-Use)
    - [Information Needed](###Information-Needed)
    - [How To Test](###How-To-Test)
- [How To Contribute](##Contribute)
- [Any Questions](##Questions)
- [License(s)](##License(s))
- [Languages Used To Create](##Made-With-Love-💖)

## User Story
--------------------------
\`\`\`
AS A ${data.userStoryPart1} \n
I WANT TO ${data.userStoryPart2} \n
SO THAT I ${data.userStoryPart3} \n
\`\`\`

## Installation
--------------------------
\`\`\`
Below is the code needed to install dependencies for this project
> ${data.installation}
\`\`\`

## How To Use
---------------------------
### Information Needed
\`\`\`
${data.userKnowledge}
\`\`\`

### How To Test
\`\`\`
Below is the command needed to run the program :)
> ${data.runTest}
\`\`\`

## How To Contribute
--------------------------
\`\`\`
${data.contribution}
\`\`\`

## Questions
--------------------------
![image of contributer](${data.avatar}) \n
If there are any issues or questions about this project, you may contact ${data.name} directly at ${data.email}

[![Visit My GitHub](https://img.shields.io/badge/Visit%20My%20GitHub-Click%20Me-1abc9c.svg)](${data.gitURL})

## License(s)
--------------------------
${licenseBadges}

## Made With Love 💖
--------------------------
${choiceBadges}
`;
}

module.exports = generateMarkdown;
