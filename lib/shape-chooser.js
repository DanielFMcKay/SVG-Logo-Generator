const Circle = require('./circle.js');
const Square = require('./square.js');
const Triangle = require('./triangle.js');
const InvTriangle = require('./invert-triangle');
const Hexagon = require('./hexagon.js');


function shapeChooser(answers) {
    // console.log(answers + " is 'answers in shapeChooser'");
    
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