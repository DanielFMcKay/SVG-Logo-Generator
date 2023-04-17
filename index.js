const fs = require('fs');

const inquirer = require('inquirer');

// calls the logo rendering function and its child functions
const generateLogo = require('./lib/shapes.js');

inquirer.prompt([
    {
        // name = what key will the answer to this question be saved in
        name: 'logoStamp',
        //  message = what message will be displayed to the user when this question is being asked
        message: 'What do you wish to stamp on your logo? You can use up to three characters.',
        type: 'input',
        validate(chara) {
            if (chara.length <= 3) {
                return "You cannot use more than three characters for your logo, please try again."
            }
            else return true
        }
    },
    {
        name: 'textColorChoice',
        message: "Please select a text color. Would you like to select a color from a list or enter a hexidecimal number?",
        type: 'list',
        choices: ['text-color-list', 'text-hex-color']
    },
    {
        name: 'textColorName',
        message: "Please choose a logo color from the following list:",
        type: 'list',
        choices: ['black', 'white', 'lightgrey', 'grey', 'darkgrey', 'red', 'darkred', 'pink', 'orange', 'goldenrod', 'yellow',
            'green', 'darkgreen', 'teal', 'lightblue', 'blue', 'darkslateblue', 'indigo', 'violet', 'purple', 'darkbrown']
        ,
        when: (answers) => answers.textColorChoice === 'text-color-list',
        default: 'black'
    },
    {
        name: 'hexColorInput',
        message: "Please enter a 3 or 6-digit hexidecimal color, starting with a '#'. Warning: I will personally judge you if you choose a 3-digit number like a plebian.",
        type: 'input',
        default: '#ffffff',
        when: (answers) => answers.textColorChoice === 'text-hex-color',
        validate: (hexResponse) => {
            if (hexResponse.includes("#")) {
                const pass = response.match(/^#(?:([0-9a-fA-F]{3}){1,2})$/)
                if (pass === null) {
                    return "Please enter a valid hexidecimal color. It must include a '#' symbol followed by three or six digits that are either numbers or the letters a-f."
                } else {
                    return true;
                }
            }
        }
    },
    // I'm giving them a choice of five shapes. I checked to make sure the parameters I made for each fit within. Credit to Pythagoras and his very helpful theorem.
    {
        name: 'logoShape',
        message: "Please select a shape for your logo from the following list:",
        type: 'list',
        choices: ['circle', 'triangle', 'inverted-triangle', 'square', 'hexagon'],
        default: 'circle'
    },
    // Since the instructions call for a choice of either a hexidecimal or a simple choice for a list, I'm giving the people the choice to decided which input with a When statement.
    // I could have listed 50 colors but that would have been an unwieldy interface. I figure people who care deeply will use the hexidecimal choice.
    {
        name: 'backgroundColorChoice',
        message: "Please select a background color. Would you like to select a color from a list or enter a hexidecimal number?",
        type: 'list',
        choices: ['background-color-list', 'background-hex-color']
    },
    {
        name: 'backgroundColorName',
        message: "Please choose a logo color from the following list:",
        type: 'list',
        choices: ['black', 'white', 'lightgrey', 'grey', 'darkgrey', 'red', 'darkred', 'pink', 'orange', 'goldenrod', 'yellow',
            'green', 'darkgreen', 'teal', 'lightblue', 'blue', 'darkslateblue', 'indigo', 'violet', 'purple', 'darkbrown']
        ,
        when: (answers) => answers.backgroundColorChoice === 'background-color-list',
        default: 'white'
    },
    {
        name: 'backgroundHexColorInput',
        message: "Please enter a 3 or 6-digit hexidecimal color, starting with a '#'.",
        type: 'input',
        default: '#000000',
        when: (answers) => answers.textColorChoice === 'background-hex-color',
        validate: (hexResponse) => {
            if (hexResponse.includes("#")) {
                const pass = response.match(/^#(?:([0-9a-fA-F]{3}){1,2})$/)
                if (pass === null) {
                    return "Please enter a valid hexidecimal color. It must include a '#' symbol followed by three or six digits that are either numbers or the letters a-f."
                } else {
                    return true;
                }
            }
        }
    }
]).then(response => {
fs.writeFile('./Outputs/logo.svg', generateLogo
(response), (err) => {
    if (err) {
      return console.log(err);
    }
    console.log('Success!!! MUAHAHAHAHAHAHAHA!!!!... probably');
  });
});

