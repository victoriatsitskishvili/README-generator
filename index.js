// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
inquirer.prompt([
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?'
  },

  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?'
  },

  {
    type: 'input',
    name: 'title',
    message: "What is your project's name?"
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a description of the project'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Which command installs dependencies?',
    default: 'npm i'
  },

  {
    type: 'input',
    name: 'usage',
    message: 'Please provide all the necessary information that the user needs to know about this project'
  },

  {
    type: 'input',
    name: 'contributing',
    message: 'In order to contribute to this project, what does the user need to know?'
  },

  {
    type: 'input',
    name: 'test',
    message: 'Which command runs tests?',
    default: 'npm test'
  },

  {
    type: 'list',
    name: 'license',
    message: 'What kind of license should your project have?',
    choices: ['Apache_2.0', 'BSD', 'GPL', 'LGPL', 'MIT', 'MPL', 'CDDL', 'EPL', 'None']
  }
])
.then(answers => {
  fs.writeFile('README.md', generateMarkdown(answers), (err) => err ? console.log(err) : console.log('Read me created!'));
});
