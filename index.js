const importObjects = require('./imports');

const Calculate = new importObjects['Calculate']();
const a = Calculate.getTotal(2, 3);

const Shape = new importObjects['Shape']();
const b = Shape.getCircleArea(10);

console.log({a, b});