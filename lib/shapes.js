//Create class for shapes 
//Create constructor

class Shape{
    constructor() { 
        this.color ='';
    }
    setColor(color) {
        this.color = (color);
    }
}

//Define circle class, using extend, render SVG circle 
class Circle extends Shape{
    render() {
        return`<circle cx="150" cy="100" r="100" fill="${this.color}" />`;
    }
}

//Define square class, using extend, render SVG square
class Square extends Shape{
    render() {
        return `<rect x="50" y="50" height="200" width="200" fill="${this.color}" />`;
    }
}

//Define triangle class, using extend, render SVG triangle
class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}


module.exports = { Circle, Square, Triangle };