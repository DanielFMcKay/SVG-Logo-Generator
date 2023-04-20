// Circle rendering class with parameters and geometric path
const Shapes = require('./shapes.js');

class Circle extends Shapes {
    constructor(logoStamp, textColor, backgroundColor, logoFont) {
        super(logoStamp, textColor, backgroundColor, logoFont);
    };
    render() {
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <circle cx="150" cy="100" r="90" fill="${this.backgroundColor}" />

  <text x="150" y="120" font-family="${this.logoFont}"
  font-size="60" text-anchor="middle" fill="${this.textColor}">${this.logoStamp}</text>
</svg>`
    };
}



module.exports = Circle;