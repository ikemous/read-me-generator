const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");


const questions = [];

function writeToFile(fileName, data) {
}

function promptUser()
{
  return inquirer.prompt([

    {
      type: "input",
      name: "userName",
      message: "What is your Github username?"
    },
    {
      type: "input",
      name: "title",
      message: "What is your project title?"
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
      choices: ["this", "that", "now", "then"],
      message: "What kind of badges would you like to use?"
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
  promptUser();
}



init();



