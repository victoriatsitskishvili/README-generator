// TODO: Create a function that returns a license badge based on which license is passed in
function LicenseBadge(license) {


// If there is no license, return an empty string
if (license !== 'None') {
  return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
}
return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function LicenseLink(license) {
  if (license !== 'None') {
    return `\n* [License](#license)\n`;
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function LicenseSection(license) {
  if (license !== 'None') {
    return `## License

This project is licensed under the ${license} license.`;
  }
  return '';
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${LicenseBadge(data.license)}

  ## Description
  
  ${data.description}
  
  ## Table of Contents 
  
  * [Installation](#installation)
  
  * [Usage](#usage)
  ${LicenseLink(data.license)}
  * [Contributing](#contributing)
  
  * [Tests](#tests)
  
  * [Questions](#questions)
  
  ## Installation
  
  Please run the following command in order to install necessary dependencies:
  
  \`\`\`
  ${data.installation}
  \`\`\`
  
  ## Usage
  
  ${data.usage}
  
  ${LicenseSection(data.license)}
    
  ## Contributing
  
  ${data.contributing}
  
  ## Tests
  
  Please run the following command in order to run tests:
  
  \`\`\`
  ${data.test}
  \`\`\`
  
  ## Questions
  
  If you have any questions about this project, please contact me via email at ${
      data.email
    }. To see my other work please visit [${data.github}](https://github.com/${
      data.github
    }/).
  
  `;
  }
  
  module.exports = generateMarkdown;