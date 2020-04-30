function generateMarkdown(data) {
    let choiceBadges = "";
    let licenseBadges = "";
    
    data.license.forEach(badge => {
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

    data.userChoice.forEach(badge => {

      let color;
      let website;

      switch(badge)
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
      choiceBadges += `[![Using](https://img.shields.io/badge/using-${badge}-${color})](${website}) \n`;
    });    

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
