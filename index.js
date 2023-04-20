const fs = require('fs')

const inquirer = require('inquirer');

// calls the logo rendering function and its child functions
const shapeChooser = require('./lib/shape-chooser.js');



inquirer.prompt([
    {
        // name = what key will the answer to this question be saved in
        name: 'logoStamp',
        //  message = what message will be displayed to the user when this question is being asked
        message: 'What do you wish to stamp on your logo? You can use up to three characters.',
        type: 'input',
        validate(chara) {
            if (chara.length > 3) {
                return "You cannot use more than three characters for your logo, please try again."
            }
            else return true
        }
    },
    // Since the instructions call for a choice of either a hexadecimal or a simple choice for a list, I'm giving the people the choice to decided which input with a When statement.
    // I could have listed 50 colors but that would have been an unwieldy interface. I figure people who care deeply will use the hexadecimal choice.
    {
        name: 'textColorChoice',
        message: "Please select a text color. Would you like to select a color from a list or enter a hexadecimal number?",
        type: 'list',
        choices: ['text-color-list', 'text-hex-color']
    },
    // this is for a color from a list
    {
        name: 'textColor',
        message: "Please choose a logo color from the following list:",
        type: 'list',
        choices: ['black', 'white', 'lightgrey', 'grey', 'darkgrey', 'red', 'darkred', 'pink', 'orange', 'goldenrod', 'yellow',
            'green', 'darkgreen', 'teal', 'cyan', 'lightblue', 'blue', 'darkslateblue', 'indigo', 'violet', 'purple', 'darkbrown']
        ,
        when: (answers) => answers.textColorChoice === 'text-color-list',
        default: 'black'
    },
    // this is for a hexadecimal entry
    {
        name: 'textColor',
        message: "Please enter a 3 or 6-digit hexadecimal color, starting with a '#'. Warning: I will personally judge you if you choose a 3-digit number for being uncreative.",
        type: 'input',
        default: '#ffffff',
        when: (answers) => answers.textColorChoice === 'text-hex-color',
        validate: (answers) => {
            if (answers.includes("#")) {
                const pass = answers.match(/^#(?:([0-9a-fA-F]{3}){1,2})$/)
                if (pass === null) {
                    return "Please enter a valid hexadecimal color. After the '#' symbol you must enter three or six digits that are either numbers or the letters a-f."
                } else {
                    return true;
                }
            } else {
                return "Please enter a valid hexadecimal color. It must start with a '#' symbol, followed by three or six digits that are either numbers or the letters a-f."
            }
        }
    },
    // I'm giving them a choice of five shapes. I checked to make sure the parameters I made for each fit within. Credit to Pythagoras and his very helpful theorem.
    {
        name: 'logoShape',
        message: "Please select a shape for your logo from the following list:",
        type: 'list',
        choices: ['circle', 'triangle', 'inverted triangle', 'square', 'hexagon'],
        default: 'circle'
    },
    // this is the choice of entry for the fill color
   {
        name: 'backgroundColorChoice',
        message: "Please select a background color. Would you like to select a color from a list or enter a hexadecimal number?",
        type: 'list',
        choices: ['background-color-list', 'background-hex-color']
    },
    // this if for a color from a list
    {
        name: 'backgroundColor',
        message: "Please choose a logo color from the following list:",
        type: 'list',
        choices: ['black', 'white', 'lightgrey', 'grey', 'darkgrey', 'red', 'darkred', 'pink', 'orange', 'goldenrod', 'yellow',
            'green', 'darkgreen', 'teal', 'cyan', 'lightblue', 'blue', 'darkslateblue', 'indigo', 'violet', 'purple', 'darkbrown']
        ,
        when: (answers) => answers.backgroundColorChoice === 'background-color-list',
        default: 'white'
    },
    // this is for a hexadecimal color entered by the user
    {
        name: 'backgroundColor',
        message: "Please enter a 3 or 6-digit hexadecimal color, starting with a '#'.",
        type: 'input',
        default: '#000000',
        when: (answers) => answers.backgroundColorChoice === 'background-hex-color',
        validate: (answers) => {
            if (answers.includes("#")) {
                const pass = answers.match(/^#(?:([0-9a-fA-F]{3}){1,2})$/)
                if (pass === null) {
                    return "Please enter a valid hexadecimal color. After the '#' symbol you must enter three or six digits that are either numbers or the letters a-f."
                } else {
                    return true;
                }
            } else {
                return "Please enter a valid hexadecimal color. It must start with a '#' symbol, followed by three or six digits that are either numbers or the letters a-f."
            }
        }
    },
    // adding a choice of a few fonts was pretty simple, so why not?
    {
        name: 'logoFont',
        message: "Please choose a font for your logo",
        type: 'list',
        choices: ['Arial', 'Courier', 'Sans Serif', 'Monospace', 'Impact']
    }
])
// .then ensures that this happens right after. Kinda intuitive for a JavaScript function.
    .then(answers => {
        // The folder path below is just so it doesn't overwrite the project's actual ReadMe file. It should still be retrievable from there.
        fs.writeFile('./outputs/logo.svg', shapeChooser
            (answers), (err) => {
                if (err) {
                    return console.log(err);
                }
                console.log('Generated logo.svg in /outputs folder');
            });
    });


