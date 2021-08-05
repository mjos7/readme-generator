'use strict';

const inquirer = require('inquirer');
const generatePage = require('./src/page-template');
const { writeFile, copyFile } = require('./utils/generateMarkdown.js');

const questions = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
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
      name: 'app-link',
      message: 'Enter the link to your deployed application. (optional)',
    },
    {
      type: 'input',
      name: 'mockup-link',
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
      name: 'tests',
      message:
        'Provide test instructions for your application and provide examples on how to run them. (optional)',
    },
    {
      type: 'input',
      name: 'queastions',
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
      type: 'input',
      name: 'github',
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
        if (githubUrl) {
          return true;
        } else {
          console.log(
            'Please enter your Email so others can contact you if they have questions'
          );
          return false;
        }
      },
    },
  ]);
};

// fs.writeFile('./README.md', generatePage(name, github), err => {
//   if (err) throw new Error(err);

//   console.log('ReadMe complete! Check out readme.md to see the output!');
// });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
