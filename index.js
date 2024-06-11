const fs = require('fs');
const inquirer = require('inquirer');
const { Circle, Triangle, Square } = require('./lib/shapes');


class SVG {
    constructor() {
        this.textElement = '';
        this.shapeElement = '';
    }
    render() {
        return `<svg width="350" height="350" xmlns="http://www.w3.org/2000/svg">
        ${this.shapeElement}
        ${this.textElement}
        </svg>`;
    }
    setTextEl(text, color) {
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`;
    }
    setShapeEl(shape) {
        this.shapeElement = shape.render();
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
        name: "textColor",
        message: "Choose your text color. Enter a color keyword or a hexadecimal number:",
    },
    {
        type: "input",
        name: "shapeColor",
        message: "Choose your shape color. Enter a color keyword or a hexadecimal number:",
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
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Your logo.svg has been generated!");
    });
}

// Create function to initialize app
async function init() {
    const svg = new SVG();
    const svgFile = "logo.svg";

    // prompt user for character answer
    const answers = await inquirer.prompt(questions);
    console.log(answers);
    //user text input
    if (answers.text.length > 0 && answers.text.length < 4) {
        // 1-3 characters
        svg.setTextEl(answers.text, answers.textColor);
    
    } else {
        console.log("Please enter 1-3 characters.");
        return;
    }
    switch (answers.shape) {
        case "Circle":
            const circle = new Circle();
            circle.setColor(answers.shapeColor);
            svg.setShapeEl(circle);
            break;
        case "Square":
            const square = new Square();
            square.setColor(answers.shapeColor);
            svg.setShapeEl(square);
            break;
        case "Triangle":
            const triangle = new Triangle();
            triangle.setColor(answers.shapeColor);
            svg.setShapeEl(triangle);
            break;
        default:
            console.log("invalid shape choice.");
            return;
    }
    const svgString = svg.render();
    writeToFile(svgFile, svgString);
}

// Function call to initialize app
init();