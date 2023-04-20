// tests go here (work in progress)
// shape attributes should be text, text color, background color, and font type in that order
// as the constructor attributes for all of them are "(logoStamp, textColor, backgroundColor, logoFont)"

// man, Jest sure does hate whitespace differences
const Circle = require('./circle.js');
const Triangle = require('./triangle.js');
const InvTriangle = require('./invert-triangle.js');
const Square = require('./square.js');
const Hexagon = require('./hexagon.js');

describe('Circle', () => {
    it("should create a circular logo with text, text color, shape color, and font input by the user, with a radius of 90 px.", () => {
        const circle = new Circle('CiR', 'yellow', '#2288DD', 'Courier');
        //  below here are the expect and toEqual functions with pre-defined attributes for all circle logos combined with
        // the user inputed attributes after "new Circle" above
        expect(circle.render()).toEqual(`
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <circle cx="150" cy="100" r="90" fill="#2288DD" />

  <text x="150" y="120" font-family="Courier"
  font-size="60" text-anchor="middle" fill="yellow">CiR</text>
</svg>`
        );
    });
});

describe('Triangle', () => {
  // if my math was correct, this is approximately a Perfect Triangle with all sides of approximately equal length to the nearest pixel
    it("should create a symmetrical triangular logo with text, text color, shape color, and font input by the user, 180px height x 208px width.", () => {
        const triangle = new Triangle('TrI', 'cyan', 'darkgreen', 'Courier');
        expect(triangle.render()).toEqual(`
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <path d="M 150 10 L 254 190 L 46 190 Z" fill="darkgreen" />

  <text x="150" y="150" font-family="Courier"
  font-size="54" text-anchor="middle" fill="cyan">TrI</text>

</svg>`
      );
  });
});

describe('InvTriangle', () => {
    it("should create an inverted triangular logo with text, text color, shape color, and font input by the user, 180px height by 208px width.", () => {
        const invTriangle = new InvTriangle('InV', '#ffdec4', '#eb8334', 'Monospace');
        expect(invTriangle.render()).toEqual(`
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <path d="M 150 190 L 254 10 L 46 10 Z" fill="#eb8334" />

  <text x="150" y="90" font-family="Monospace"
  font-size="54" text-anchor="middle" fill="#ffdec4">InV</text>

</svg>`
      );
  });
});


describe('Square', () => {
    it("should create a square logo with text, text color, shape color, and font input by the user, with a height and width of 180 px.", () => {
        const square = new Square('SqR', '#9A9A9A', 'darkred', 'Impact');
        expect(square.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <path d="M 60 10 L 240 10 L 240 190 L 60 190 Z" fill="darkred" />

        <text x="150" y="120" font-family="Impact"
        font-size="60" text-anchor="middle" fill="#9A9A9A">SqR</text>

      </svg>`
      );
  });
});


describe('Hexagon', () => {
  it("should create a hexagonal logo with text, text color, shape color, and font input by the user, 180px height by 208px width.", () => {
      const hexagon = new Hexagon('HeX', 'white', '#7a73d9', 'Arial');
      expect(hexagon.render()).toEqual(`
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <path d="M 46 100 L 98 10 L 202 10 L 254 100 L 202 190 L 98 190 Z" fill="#7a73d9" />

  <text x="150" y="120" font-family="Arial"
  font-size="60" text-anchor="middle" fill="white">HeX</text>

</svg>`
      );
  });
});