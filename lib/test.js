const {Circle, Square, Triangle} = require("./shapes");

describe('Circle', () => {
    test('render complete', () => {
        let shape = new Circle();
        let color = 'green';
        shape.setColor(color);
        expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="100" fill="${color}" />`);
    });
});

describe('Square', () => {
    test('render complete', () => {
        const shape = new Square();
        let color = 'red';
        shape.setColor(color);
        expect(shape.render()).toEqual(`<rect x="50" y="50" height="200" width="200" fill="${color}" />`);
    });
});

describe('Triangle', () => {
    test('render complete', () => {
        const shape = new Triangle();
        let color = 'blue';
        shape.setColor(color);
        expect(shape.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="${color}" />`);
    });
});