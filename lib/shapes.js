// code go here, starting with what is required
// const fs = require('fs')




// parent class Shapes is the parent of the classes for the different possible logo shapes (circle, triangle, inverted triangle, hexagon, and square)
class Shapes {
    // the user-inputed attributes for all shapes
    constructor(logoStamp, textColor, backgroundColor, logoFont) {
        this.logoStamp = logoStamp,
        this.textColor = textColor,
        this.backgroundColor = backgroundColor,
        this.logoFont = logoFont
    }
}

// function shapeChooser(answers) {
    
//     if (answers.logoShape === 'Circle') {
//         let shapeChoice = new Circle (answers.logoStamp, answers.textColor, answers.backgroundColor, answers.logoFont)
//         return shapeChoice.render()

//     }
//     if (answers.logoShape === 'Triangle') {
//         let shapeChoice = new Triangle (answers.logoStamp, answers.textColor, answers.backgroundColor, answers.logoFont)
//         return shapeChoice.render()

//     }
//     if (answers.logoShape === 'InvTriangle') {
//         let shapeChoice = new InvTriangle (answers.logoStamp, answers.textColor, answers.backgroundColor, answers.logoFont)
//         return shapeChoice.render()

//     }
//     if (answers.logoShape === 'Square') {
//         let shapeChoice = new Square (answers.logoStamp, answers.textColor, answers.backgroundColor, answers.logoFont)
//         return shapeChoice.render()

//     }
//     if (answers.logoShape === 'Hexagon') {
//         let shapeChoice = new Hexagon (answers.logoStamp, answers.textColor, answers.backgroundColor, answers.logoFont)
//         return shapeChoice.render()

//     }
//     else console.log("Something has gone horribly wrong with choosing a shape. Advise throwing holy water on the keyboard.");
// }

// function generateLogo(answers) {
//     const logoOutput = shapeChooser(answers);
//     fs.writeFile('./outputs/logo.svg', logoOutput);
//     console.log('Generated logo.svg in /outputs folder)')
// }

module.exports = Shapes;
