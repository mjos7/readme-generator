// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'No License') {
    return `https://img.shields.io/badge/license-${license}-blue.svg`;
  }
  return ``;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'No License') {
    return `* [License](#license)`;
  }
  return ``;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'No License') {
    return;
  }
  return ``;
}

// TODO: Create a function to generate markdown for README

// STARTER CODE END //

const generateMarkdown = data => {
  return `
    # ${data.projectName}
  
  
    ## Description   
    
    ![Screenshot of Mockup](${data.mockupLink})
  
    ${data.description}
  
    ### Deployed Application
    ${data.appLink}
  
  
    ## Table of Contents   
  
    * [Installation](#installation)
    * [Usage](#usage)
    ${renderLicenseLink(data.license)}
    * [Contributions](#contributions)
    * [Tests](#tests)
    * [Questions](#questions)
  
  
    ## Installation
  
    ${data.installation}
  
  
    ## Usage
  
    ${data.usage}
  
  
    ## Credits
  
    ${data.credits}
  
  
    ## License
    
    ${data.license}
  
  
    ## Badges
    
    ${renderLicenseBadge(data.licenseBadge)}
    
  
    ## Features
    ${data.features}
  
    ## Contributions
    ${data.contributions}
  
  
    ## Tests
    ${data.tests}
  
    ## Questions
  
    For any questions, please don't hesitate to reach out to ${
      data.githubUsername
    } at ${data.email}
  
      `;
};

module.exports = generateMarkdown;

// const generateMarkdown = fileContent => {
//   return new Promise((resolve, reject) => {
//     fs.writeFile('./dist/index.html', fileContent, err => {
//       // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
//       if (err) {
//         reject(err);
//         // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
//         return;
//       }

//       // if everything went well, resolve the Promise and send the successful data to the `.then()` method
//       resolve({
//         ok: true,
//         message: 'File created!',
//       });
//     });
//   });
// };

// const copyFile = () => {
//   return new Promise((resolve, reject) => {
//     fs.copyFile('./app.js', fileContent, err => {
//       if (err) {
//         reject(err);
//         return;
//       }
//       resolve({
//         ok: true,
//         message: 'File copied successfully',
//       });
//     });
//   });
// };
