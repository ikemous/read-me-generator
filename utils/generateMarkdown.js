/**
 * benerateBadges()
 * Purpose: compile all badges into a string usable by the markdown language 
 * Parameters: badgeChoices - array of language choices selected by user
 * Return: badges - string with usable markdDown code containing badges
*/
const generateBadges = (badgeChoices) => {

  //String to be sent back
  let badges = "";

  //Loop through all choices
  badgeChoices.forEach(badge => {
    //Check Choices
    switch(badge)
    {
      case "Node":
        badges += "[![Using Node](https://img.shields.io/badge/Using-Node-brightgreen)](${https://nodejs.org/en/}) \n";
        break;
      case "Javascript":
        badges += "[![Using Javascript](https://img.shields.io/badge/Using-Javascript-yellow)](${https://www.javascript.com/}) \n";
        break;
      case "HTML":
        badges += "[![Using HTML](https://img.shields.io/badge/Using-HTML-orange)](https://www.w3schools.com/html/) \n";
        break;
      case "CSS":
        badges += "[![Using CSS](https://img.shields.io/badge/Using-CSS-blue)](https://www.w3schools.com/css/) \n";
        break;      
      case "JQuery":
        badges += "[![Using JQuery](https://img.shields.io/badge/Using-JQuery-black)](https://jquery.com/) \n";
        break;
      case "React":
        badges += "[![Using React](https://img.shields.io/badge/Using-React-blue)](https://reactjs.org/) \n";
        break;
      case "Apache2.0":
        badges += "[![License: Apache2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0) \n";
        break;
      case "BSD203":
        badges += "[![License: BSD203](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause) \n";
        break;
      case "BSD201":
        badges += "[![License: BSD202](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause) \n";
        break;
      case "EPL201":
        badges += "[![License: EPL201](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0) \n";
        break;
      case "MIT":
        badges += "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) \n";
        break;
      case "ISC":
        badges += "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC) \n";
        break;
      default:
        break;
    }//end Checking Choices
  });//End Looping through all choices

  //Return string of badges
  return badges;

}//End generateBadges()

/**
 * generateMarkdown()
 * Purpose: using sent data, generateLicenseBadges, and generateLanguageBadges. A Markdown file will be generated 
 * Parameters: data - information gathered from the user
 * Return: string literal with the completed markdown file 
*/
function generateMarkdown(data) {

  //Generate badges into a string
  let licenseBadges = generateBadges(data.license);//license badge(s)
  let choiceBadges = generateBadges(data.languages);//language badges(s)

  //return markodwn file
  return `
# ${data.title}
## Table Of Contents
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
}//End generateMarkdown

//Allow generateMarkdown to be used by other files
module.exports = generateMarkdown;
