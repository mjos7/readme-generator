const generatePage = readMeInput => {
  return `
  # ${projectTitle}

  ## General
  Git Page - Deployed Application
  ${deployedApplication}
  
  Screenshot of Mockup
  ![Screenshot of Mockup](${mockupLink})


  ## Description   
  ${description}

  ## Table of Contents   
  ${tableOfContents}

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
  ${questions}

    `;
};

module.exports = generatePage;
