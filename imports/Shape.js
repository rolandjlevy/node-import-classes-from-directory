class Shape {
   
    getSquareArea(w, h) {
      return w * h
    }

    getCircleArea(r) {
      return Number((2 * Math.PI * r).toFixed(2));
    }
    
}

module.exports = Shape;