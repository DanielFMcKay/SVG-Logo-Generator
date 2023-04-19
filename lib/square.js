// Square rendering class with parameters and geometric path
const Shapes = require('./shapes.js');

class Square extends Shapes {
    constructor(logoStamp, textColor, backgroundColor, logoFont) {
        super(logoStamp, textColor, backgroundColor, logoFont);
    };
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <path d="M 60 10 L 240 10 L 240 190 L 60 190 Z" fill="${this.backgroundColor}" />
      
        <text x="150" y="120" font-family="${this.logoFont}"
        font-size="60" text-anchor="middle" fill="${this.textColor}">${this.logoStamp}</text>
      
      </svg>`};;
    }
    
    
  
    module.exports = Square;