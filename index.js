// array of questions for user
const inquirer = require("inquirer");
const fs = require("fs");


fileCreator()

async function fileCreator() {
    const {title, description, instructions} = await inquirer.prompt([
    {
        question: "What is the project title?",
        response: "title"
    },
    {
        question: "Provided a description of the project",
        response: "description"
    },
    {
        question: "Do you have installation instructions?",
        response: "instructions"
    },
    {
        question: ,
        response:
    },
    {
        question: ,
        response:
    },
    {
        question: ,
        response:
    },
    ])
}







// const questions = [

// ];

// // function to write README file
// function writeToFile(fileName, data) {
// }

// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();
