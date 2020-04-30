const fs = require("fs");
const axios = require("axios");
const util = require("util");
const inquirer = require("inquirer");
const genMarkdown = require("./utils/generateMarkdown")

const writeToFile = util.promisify(fs.writeFile);

let questions;

function promptUser()
{
  return inquirer.prompt([

    {
      type: "input",
      name: "username",
      message: "What is your Github username?"
    },
    {
      type: "input",
      name: "email",
      message: "What is a good email to contact you?"
    },
    {
      type: "input",
      name: "title",
      message: "What is your project title?"
    },
    {
      type: "input",
      name: "userStoryPart1",
      message: "Please complete the following sentence for the user story: AS A..."
    },
    {
      type: "input",
      name: "userStoryPart2",
      message: "Please complete the following sentence for the user story: I WANT..."
    },
    {
      type: "input",
      name: "userStoryPart3",
      message: "Please complete the following sentence for the user story: SO THAT I..."
    },
    {
      type: "input",
      name: "description",
      message: "How would you describe your project?"
    },
    {
      type: "input",
      name: "installation",
      message: "What command should be used to intall your depencies?"
    },
    {
      type: "checkbox",
      name: "userChoice",
      choices: ["Node", "Javascript", "HTML", "CSS", "JQuery", "React"],
      message: "What Languages were used in making this project?"
    },   
    {
      type: "input",
      name: "userKnowledge",
      message: "What does the user need to know about running the program?"
    }, 
    {
      type: "input",
      name: "runTest",
      message: "What command must be run to test the program?"
    },
    {
      type: "input",
      name: "contribution",
      message: "How can someone contribute to this project?"
    },


  ]);
}

async function init() {
  questions = await promptUser();
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



