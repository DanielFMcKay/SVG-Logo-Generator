// we're starting with the shape files we need
const Circle = require('./circle.js');
const Square = require('./square.js');
const Triangle = require('./triangle.js');
const InvTriangle = require('./invert-triangle');
const Hexagon = require('./hexagon.js');


function shapeChooser(answers) {
// This directs which shape to render per the users' choice, and then adds the user-inputed attributes. A middle-man function, but still vital.
    
    if (answers.logoShape === 'circle') {
        let shapeChoice = new Circle (answers.logoStamp, answers.textColor, answers.backgroundColor, answers.logoFont)
        return shapeChoice.render()

    }
    if (answers.logoShape === 'triangle') {
        let shapeChoice = new Triangle (answers.logoStamp, answers.textColor, answers.backgroundColor, answers.logoFont)
        return shapeChoice.render()

    }
    if (answers.logoShape === 'inverted triangle') {
        let shapeChoice = new InvTriangle (answers.logoStamp, answers.textColor, answers.backgroundColor, answers.logoFont)
        return shapeChoice.render()

    }
    if (answers.logoShape === 'square') {
        let shapeChoice = new Square (answers.logoStamp, answers.textColor, answers.backgroundColor, answers.logoFont)
        return shapeChoice.render()

    }
    if (answers.logoShape === 'hexagon') {
        let shapeChoice = new Hexagon (answers.logoStamp, answers.textColor, answers.backgroundColor, answers.logoFont)
        return shapeChoice.render()

    }
    else console.log("Something has gone horribly wrong with choosing a shape. Advise throwing holy water on the keyboard.");
}


module.exports = shapeChooser;