const importedObjects = require('./imports');

const Calculate = new importedObjects['Calculate']();
const a = Calculate.getTotal(2, 3);

const Shape = new importedObjects['Shape']();
const b = Shape.getCircleArea(10);

console.log({a, b});