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

// write data to file
function writeToFile(fileName, data) {
    console.log("Writing [" + data + "] to file [" + fileName + "]")
    filesystem.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Your logo.svg has been generated!");
    });
}

// Create function to initialize app
async function init() {
    const svgString = "";
    const svgFile = "logo.svg";

    // prompt user for character answer
    const answers = await inquirer.prompt(questions);
    //user text input
    let userText = "";
    if (answers.text.length > 0 && answers.text.length <4) {
        // 1-3 characters
        userText = answers.text;
    } else {
        console.log("Please enter 1-3 characters.");
        return;
    }
}

// Function call to initialize app
init();