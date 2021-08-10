'use strict';

const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

const promptUser = () => {
  return inquirer.prompt(questions);
};

// STARTER CODE START //

// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'projectName',
    message: 'What is the name of your project? (required)',
    validate: projectName => {
      if (projectName) {
        return true;
      } else {
        console.log('Please enter your Project Name');
        return false;
      }
    },
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a brief description of the project (required)',
    validate: projDescription => {
      if (projDescription) {
        return true;
      } else {
        console.log('Please enter a Project Description');
        return false;
      }
    },
  },
  {
    type: 'input',
    name: 'appLink',
    message: 'Enter the link to your deployed application. (optional)',
  },
  {
    type: 'input',
    name: 'mockupLink',
    message: 'Enter the link to a screenshot of your application. (optional)',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the steps required to install your project?',
    validate: installation => {
      if (installation) {
        return true;
      } else {
        console.log('Please enter instructions for installing your project');
        return false;
      }
    },
  },

  {
    type: 'input',
    name: 'usage',
    message: 'Provide instructions and examples for use.',
    validate: usage => {
      if (usage) {
        return true;
      } else {
        console.log('Please provide instructions and examples for use');
        return false;
      }
    },
  },

  {
    type: 'list',
    name: 'license',
    message: 'Please select your license from the options below.',
    choices: [
      'License preferred by community',
      'MIT License',
      'GNU GPLv3',
      'GNU AGPLv3',
      'Mozilla Public License 2.0',
      'Apache License 2.0',
      'Boost Software License 1.0',
      'The Unlicense',
      'No License',
    ],
    validate: license => {
      if (license) {
        return true;
      } else {
        console.log('Please select a license from the options given');
        return false;
      }
    },
  },

  {
    type: 'input',
    name: 'contributions',
    message:
      'Please enter guidelines for how others can contibute to your project. (optional)',
  },
  {
    type: 'input',
    name: 'tests',
    message:
      'Provide test instructions for your application and provide examples on how to run them. (optional)',
  },

  {
    type: 'input',
    name: 'githubUsername',
    message: 'Enter your GitHub Username',
    validate: githubUsername => {
      if (githubUsername) {
        return true;
      } else {
        console.log('Please enter your GitHub Username');
        return false;
      }
    },
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your Email Address?',
    validate: email => {
      if (email) {
        return true;
      } else {
        console.log(
          'Please enter your Email so others can contact you if they have questions'
        );
        return false;
      }
    },
  },
];

// TODO: Create a function to write README file
function writeToFile(data) {
  return new Promise((resolve, reject) => {
    fs.writeFile('src/README.md', data, err => {
      if (err) {
        console.log('There is an error');
        return;
      }
      resolve({
        message: 'Your REAdME.md file has been created in the source folder',
      });
    });
  });
}

// TODO: Create a function to initialize app
function init() {
  promptUser().then(data => writeToFile(generateMarkdown(data)));
}

// Function call to initialize app
init();
