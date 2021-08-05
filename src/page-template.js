const generatePage = readMeInput => {
  return `
  # ${projectName}

  ## General
  Git Page - Deployed Application
  ${deployedApplication}

  ${licenseBadge}
  
  Screenshot of Mockup
  ![Screenshot of Mockup](${mockupLink})


  ## Description   
  ${projDescription}

  ## Table of Contents   
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributions](#contributions)
  - [Tests](#tests)
  - [Questions](#questions)


  ## Installation
  ${installation}

  ## Usage
  ${usage}


  ## License
  ${license}

  ## Contributions
  ${contributions}

  ## Tests
  ${tests}

  ## Questions
  For any questions, please don't hesitate to reach out to ${githubUrl} at ${email}

    `;
};

module.exports = generatePage;
