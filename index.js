//Import all items needed to run the program
const fs = require("fs");//Used for writing to the file
const axios = require("axios");//Used for pulling from the github API
const util = require("util");//Used for promises
const inquirer = require("inquirer");//Used to prompt user for information
const genMarkdown = require("./utils/generateMarkdown");//Used to generate the Readme File

//Allow fs.writeFile to use promises
const writeToFile = util.promisify(fs.writeFile);

/**
 * promptUser()
 * Purpose: To Use Inquirer and ask user information needed to write the read me file
 * Parameters: None
 * Return: None 
*/
function promptUser()
{
  //return answers to a query of questions using inquirer
  return inquirer.prompt([
    //User github username
    {
      type: "input",
      name: "username",
      message: "What is your Github username?"
    },
    //Users Contact Email
    {
      type: "input",
      name: "email",
      message: "What is a good email to contact you?"
    },
    //Users Project Title/Name
    {
      type: "input",
      name: "title",
      message: "What is your project title?"
    },
    //User Story Part 1 (AS A blah blah blah)
    {
      type: "input",
      name: "userStoryPart1",
      message: "Please complete the following sentence for the user story: AS A..."
    },
    //User Story Part 2(I WANT blah blah blah)
    {
      type: "input",
      name: "userStoryPart2",
      message: "Please complete the following sentence for the user story: I WANT..."
    },
    //User Story Part 3(SO THAT I blah blah blah)
    {
      type: "input",
      name: "userStoryPart3",
      message: "Please complete the following sentence for the user story: SO THAT I..."
    },
    //Description of project
    {
      type: "editor",
      name: "description",
      message: "How would you describe your project?"
    },
    //Depencies install code
    {
      type: "input",
      name: "installation",
      message: "What command should be used to intall your depencies?"
    },  
    //Information that the user may need to know
    {
      type: "editor",
      name: "userKnowledge",
      message: "What does the user need to know about running the program?"
    }, 
    //Code used to run the program
    {
      type: "input",
      name: "runTest",
      message: "What command must be run to test the program?"
    },
    //Project Contributions
    {
      type: "editor",
      name: "contribution",
      message: "How can someone contribute to this project?"
    },
    //License(s) Used in the project
    {
      type: "checkbox",
      name: "license",
      choices: ["Apache2.0", "BSD203", "BSD201", "EPL201", "MIT", "ISC"],
      message: "What licenses are included?",
      default: "none"
    },
    //Language(s) Used in the project
    {
      type: "checkbox",
      name: "languages",
      choices: ["Node", "Javascript", "HTML", "CSS", "JQuery", "React"],
      message: "What Languages were used in making this project?",
      default: "none"
    },
  ]);//End Questions with Inquierer
}//End prmoptUser()

async function init() {
  let questions = await promptUser();
  await axios.get(`https://api.github.com/users/${questions.username}`).then(function(response){

   questions.avatar =  response.data.avatar_url;
   questions.gitURL = response.data.html_url;
   questions.name = response.data.name;
  }).catch(function(){
    console.log("Github account not found or not entered")
    questions.avatar =  "";
   questions.gitURL = "";
   questions.name = "";
  });

  const markdown = await genMarkdown(questions);
  
  
  await writeToFile('newReadMe.md', markdown);

}



init();



