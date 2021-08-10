// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'No License') {
    return `https://img.shields.io/badge/license-${license}-blue.svg`;
  }
  return ``;
}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'No License') {
    return `* [License](#license)`;
  }
  return ``;
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'No License') {
    return;
  }
  return ``;
}

// Function to generate markdown for README

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
