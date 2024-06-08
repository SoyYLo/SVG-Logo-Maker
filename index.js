const fs = require('fs');
const inquirer = require('inquirer');
const {Circle, Triangle, Square} = require('./lib/shapes');
const colors = require('colors');

class SVG{
    constructor(){
        this.textElement = ''
        this.shapeElement = ''
    }
    render(){
        return `<svg width="350" height="60" xmlns="http://www.w3.org/2000/svg">`
    }
    setTextEl(text){
        this.textElement =  `<text x="150" y="125" font-size="60" text-anchor="middle" fill="black">`
    }
    setShapeEl(shape){
        this.shapeElement = shape.render()
    }
}

// Create array of questions for user input
const questions = [
    {
        type: "input",
        name: "text",
        message: "Enter up to 3 Characters:",
    },
    {
        type: "input",
        name: "text-color",
        messgae: "Choose you color. Enter a color keyword or a hexadecimal number:",
    },
    {
        type: "list",
        name: "shape",
        message: "Choose which shape you would like for your logo:",
        choices: ["Circle", "Square", "Triangle"],
    },
];